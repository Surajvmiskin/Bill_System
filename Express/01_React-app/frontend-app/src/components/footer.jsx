import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="page-footer dark">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <h5>Get started</h5>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/signup">Sign up</Link></li>
                            <li><Link to="/downloads">Downloads</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>About us</h5>
                        <ul>
                            <li><Link to="/company-info">Company Information</Link></li>
                            <li><Link to="/contact-us">Contact us</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>Support</h5>
                        <ul>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>Legal</h5>
                        <ul>
                            <li><Link to="/terms-of-service">Terms of Service</Link></li>
                            <li><Link to="/terms-of-use">Terms of Use</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2024 Copyright Text</p>
            </div>
        </footer>
    );
};

export default Footer;