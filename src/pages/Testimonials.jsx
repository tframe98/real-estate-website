import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [formData, setFormData] = useState({ name: '', content: '' });

    useEffect(() => {
      axios.get('/api/testimonials')
          .then(response => {
              setTestimonials(response.data);
          })
          .catch(error => console.error(error));
  }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/testimonials', formData)
            .then(response => {
                setTestimonials([...testimonials, response.data]);
                setFormData({ name: '', content: '' });
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="container">
            <h1>Testimonials</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {testimonials.length > 0 && (
                <div className="mt-4">
                    <h2>Submitted Testimonials</h2>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id}>
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Testimonials;