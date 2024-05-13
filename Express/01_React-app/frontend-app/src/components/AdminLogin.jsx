import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(response => {
                console.log('Server response:', response);
                return response.json().then(data => {
                    if (response.ok) {
                        navigate('/Admin'); // Ensure this is the correct route
                    } else {
                        console.error('Login failed:', data.message);
                        alert(data.message || 'Unknown error occurred');
                    }
                });
            })
            .catch(error => {
                console.error('Network or other error:', error);
                alert('Error logging in. Please try again later.');
            });
    };

    return (
        <main className="page login-page">
            <section className="clean-block clean-form dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">Admin Portal Login</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input className="form-control item" type="email" id="email" value={email} onChange={handleEmailChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input className="form-control" type="password" id="password" value={password} onChange={handlePasswordChange} />
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="checkbox" />
                                <label className="form-check-label" htmlFor="checkbox">Remember me</label>
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">Log In</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default AdminLogin;