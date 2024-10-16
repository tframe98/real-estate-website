import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({ email: '', password: '', name: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/register', formData)
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    };

    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;