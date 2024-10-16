import { useState, useEffect } from 'react';
import axios from 'axios';
import './testimonials.css';


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('/api/testimonials');
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials', error);
      }
    };

    fetchTestimonials();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      await axios.post(
        '/api/testimonials',
        { review, rating },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Refresh the testimonials list
      const updatedTestimonials = await axios.get('/api/testimonials');
      setTestimonials(updatedTestimonials.data);
    } catch (error) {
      console.error('Error submitting testimonial', error);
    }
  };

  return (
    <div>
      <h2>Testimonials</h2>
      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            {testimonial.review} - Rating: {testimonial.rating}
          </li>
        ))}
      </ul>

      {localStorage.getItem('token') ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Review:</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div>
            <label>Rating:</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
            />
          </div>
          <button type="submit">Submit Testimonial</button>
        </form>
      ) : (
        <p>Please log in to leave a testimonial.</p>
      )}
    </div>
  );
};

export default Testimonials;
