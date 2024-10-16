// Express routes (testimonials.js)
import { Router } from 'express';
import { requireAuth } from '../middleware/auth'; // Middleware to verify JWT
const router = Router();
import { PrismaClient } from '@prisma/client'; // Adjust to properly use Prisma
const prisma = new PrismaClient(); // Initialize Prisma

// Fetch all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await prisma.testimonial.findMany();
    res.json(testimonials);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Add a new testimonial (only if authenticated)
router.post('/', requireAuth, async (req, res) => {
  try {
    const { userId, review, rating } = req.body;

    if (!userId || !review || !rating) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newTestimonial = await prisma.testimonial.create({
      data: {
        userId,
        review,
        rating,
      },
    });

    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

export default router;
