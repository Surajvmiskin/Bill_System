import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/login', { email, password });
            if (response.data.success) {
                // User exists and password matches
                window.location.href = '/main-content';
            } else {
                if (!response.data.userExists) {
                    // User does not exist, redirect to registration
                    window.location.href = '/registration';
                } else {
                    // User exists but wrong password, show error message
                    setErrorMessage('Invalid credentials. Please try again.');
                }
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                // User not found, redirect to registration
                window.location.href = '/registration';
            } else if (error.response && error.response.status === 401) {
                // Wrong password, show error message
                setErrorMessage('Invalid credentials. Please try again.');
            } else {
                // Other errors
                console.error('Error:', error);
                setErrorMessage('An error occurred while logging in. Please check the console for more details.');
            }
        }
    };

    return (
        <main className="page login-page">
            <section className="clean-block clean-form dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">Log In</h2>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input className="form-control item" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input className="form-control" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="checkbox" />
                                <label className="form-check-label" htmlFor="checkbox">Remember me</label>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary">Log In</button>
                            <a href="Admin-login.html" className="btn btn-primary">Login as Admin?</a>
                            <a href="registration.html" className="btn btn-link mt-2">Don't have an account? Sign up</a>
                        </div>
                        {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                    </form>
                </div>
            </section>
        </main>
    );
};

export default LoginForm;