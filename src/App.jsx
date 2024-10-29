import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import express from 'express';
import authRoutes from './routes/authRoutes.js';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
};



const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Attach auth routes to /api
app.use('/api', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default App;