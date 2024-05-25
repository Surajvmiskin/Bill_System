import React from 'react';

const RegistrationPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        if (!data.email) {
            alert('Email is required.');
            return;
        }

        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(result => {
                if (result.success) {
                    alert(result.message);
                    window.location.href = '/login';
                } else {
                    alert('Registration failed: ' + result.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
    };

    return (
        <main className="page registration-page">
            <section className="clean-block clean-form dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">Registration</h2>
                    </div>
                    <form id="registrationForm" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Name</label>
                            <input className="form-control item" type="text" id="name" name="name" data-bs-theme="light" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input className="form-control item" type="password" id="password" name="password" data-bs-theme="light" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input className="form-control item" type="email" id="email" name="email" data-bs-theme="light" />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default RegistrationPage;
