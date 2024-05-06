import React from 'react';

function LoginForm() {
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch('/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => {
            if (response.ok) {
                window.location.href = '/table.html'; // Redirect if login is successful
            } else if (response.status === 401) {
                alert('Invalid admin credentials'); // Show alert if credentials are invalid
            } else {
                throw new Error('Something went wrong on the server.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
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
                    <form id="loginForm" onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input className="form-control item" type="email" id="email" data-bs-theme="light" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input className="form-control" type="password" id="password" data-bs-theme="light" />
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="checkbox" data-bs-theme="light" />
                                <label className="form-check-label" htmlFor="checkbox">Remember me</label>
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">Log In</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default LoginForm;
