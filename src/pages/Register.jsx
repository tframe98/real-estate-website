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
  <h2>Register</h2>
  <form>
    <input type="text" placeholder="Username" required />
    <input type="email" placeholder="Email" required />
    <input type="password" placeholder="Password" required />
    <button type="submit">Register</button>
    <p><a href="/login">Already have an account? Login</a></p>
  </form>
</div>
    );
};

export default Register;