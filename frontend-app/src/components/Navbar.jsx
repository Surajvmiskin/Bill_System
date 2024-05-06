import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to install react-router-dom if not already installed
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-body clean-navbar navbar-light">
            <div className="container">
                <Link className="navbar-brand logo" to="/">ECTBS</Link>
                <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                    <span className="visually-hidden">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/faq">FAQ</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact-us">CONTACT US</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;