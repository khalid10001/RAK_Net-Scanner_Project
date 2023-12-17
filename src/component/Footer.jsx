import React, {useState} from 'react';
import logo from "../img/neural-network.png";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [submissionError, setSubmissionError] = useState('');
    const isValidEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isValidEmail(email)) {
            setSubmissionError('Invalid email format');
            return;
        }

        fetch('http://localhost:8000/Emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json()
            })
            .then(data => {
                console.log('Success:', data);
                setSubmitted(true);
                setEmail('');
                setSubmissionError('');
            })
            .catch((error) => {
                console.error('Error:', error.message);
                setSubmissionError('Error submitting email');
            });
    };



    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="container">

                    <div className="column subscribe-column">
                        <img src={logo} alt="Logo" className="logo"/>
                        <p>Stay in the loop and sign up for the<br/>RAK newsletter</p>

                            <form onSubmit={handleSubmit} className="subscription-form">
                                <input
                                    type="email"
                                    required
                                    className="email-input"
                                    id="email-input"  // Add an id attribute
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <button type="submit" className="submit-button"></button>
                            </form>
                        {submitted && <p>Email submitted successfully!</p>}
                        {submissionError && <p>{submissionError}</p>}
                    </div>
                    <div className="column column-two">
                        <div className="links-container">
                            <div className="links-column company-links">
                                <strong>Company</strong>
                                <Link to="/">Home</Link>
                                <Link to="/about">About</Link>
                                <Link to="/solutions">Solutions</Link>
                                <Link to="/team">Team</Link>
                                <Link to="/career">Career</Link>
                            </div>

                            <div className="links-column documentation-links">
                                <strong>Documentation</strong>
                                <Link to="/public">Help Center</Link>
                                <Link to="/contact">Contact</Link>
                                <Link to="/FAQ">FAQ</Link>
                                <Link to="/privacyPolicy">Privacy Policy</Link>
                            </div>

                            <div className="links-column social-links">
                                <strong>Social</strong>
                                <Link to="/Facebook">Facebook</Link>
                                <Link to="/Instagram">Instagram</Link>
                                <Link to="/YouTube">YouTube</Link>
                                <Link to="/Twitter">Twitter</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="copyright">
                    <p>© RAK. All Rights Reserved 2024</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
