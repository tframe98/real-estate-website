import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

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