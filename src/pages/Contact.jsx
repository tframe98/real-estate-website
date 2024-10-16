import { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://api.followupboss.com/v1/people', formData, {
                headers: {
                    // eslint-disable-next-line no-undef
                    'Authorization': `Basic ${process.env.REACT_APP_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            });
            
            if (response.status === 200) {
                alert('Your message has been sent successfully!');
            } else {
                alert('Unexpected response. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send your message. Please try again later.');
        }
    };
    
            

    return (
        <div className="container-contact-form">
            <h1 className="form-title">Contact Us</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your phone number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </Form.Group>

                
                <Button variant="primary" type="submit" className="submit-button">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Contact;