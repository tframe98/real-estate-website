import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import axios from 'axios';

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

const FUB_API_KEY = 'fka_0PM6IIPMBTXaoLf9duIP2Oh2FIfBgenckp';

app.post('/api/contacts', async (req, res) => {
    const { name, email, phone } = req.body;

    try {
        // Send data to Follow Up Boss
        const response = await axios.post(
            'https://api.followupboss.com/v1/people',
            {
                firstName: name,
                emails: [{ value: email }],
                phones: [{ value: phone }],
                
            },
            {
                headers: {
                    'Authorization': `Basic ${Buffer.from(FUB_API_KEY + ':').toString('base64')}`,
                    'Content-Type': 'application/json',
                    'X-System': 'TylerFrame',
                    'X-System-Key': 'a4fa10126ca1a986cd91f074d27f1471',
                },
            }
        );

        // Response to client on successful submission
        res.status(200).json({ message: 'Contact information sent successfully!', data: response.data });
    } catch (error) {
        console.error('Error sending data to Follow Up Boss:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to send contact information' });
    }
});

// Routes to get testimonials
app.get('/api/testimonials', async (req, res) => {
  const testimonials = await prisma.testimonial.findMany();
  res.json(testimonials);
});

// Route to submit a new testimonial
app.post('/api/testimonials', async (req, res) => {
  const { name, content } = req.body;

  const newTestimonial = await prisma.testimonial.create({
      data: {
          name,
          content,
      },
  });

  res.status(201).json(newTestimonial);
});

// Registration route
app.post('/api/register', async (req, res) => {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
            },
        });
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(400).json({ error: 'User already exists' });
    }
});

// Login route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ userId: user.id }, 'your_secret_key', {
            expiresIn: '1h',
        });
        res.json({ message: 'Login successful', token });
    } else {
        res.status(401).json({ error: 'Invalid email or password' });
    }
});

// Protected route example
app.get('/api/testimonials', async (req, res) => {
    const testimonials = await prisma.testimonial.findMany();
    res.json(testimonials);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});