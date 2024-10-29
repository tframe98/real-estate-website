import  { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';
const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/login', formData)
            .then(response => {
                console.log(response.data);
                // Handle token storage and redirect here
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="container">
  <h2>Login</h2>
  <form>
    <input type="text" placeholder="Username" required />
    <input type="password" placeholder="Password" required />
    <button type="submit">Login</button>
    <p><a href="/register">Don't have an account? Register</a></p>
  </form>
</div>
    );
};

export default Login;