import {useState} from 'react';
import '../css/Contact.css';
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Layout from "../component/Layout";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate email
        if (!isValidEmail(email)) {
            alert('Invalid email format');
            return;
        }
        const data = {name, email, message};

        fetch('http://localhost:8000/Contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json()
        })
            .then(data => {
                console.log('Success:', data);
                setEmail("")
                setName("")
                setMessage("")

            })
            .catch((error) => {
                console.error('Error:', error.message);
            });
    };


    const isValidEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleChange = (event, value) => {
        const inputValue = event.target.value;

        if (value === 'Name') {
            setName(inputValue);
        } else if (value === 'Email') {
            setEmail(inputValue);
        } else if (value === 'Message') {
            setMessage(inputValue);
        }
    };

    return (
        <Layout title={"Contact Us | RAK"}>
            <div className="Contact-Container">
                <Navbar/>
                <main className="contact-main-container">
                    <div className="company-details">
                        <h2>Company Details</h2>
                        <p>Get in touch and send us your requests, feedback, suggestions, complaints, or anything else
                            you
                            want
                            to share with us. Leave your email address and expect a reply from us soon! Our Support team
                            is
                            available Monday through Friday between 10:00 AM and 6:00 PM GMT+2.</p>
                        <ul className="contact-info">
                            <li><strong>Phone Number:</strong> +1234656789</li>
                            <li><strong>E-mail Address:</strong> hello@reallygreatsite.com</li>
                            <li><strong>Official Website:</strong> <a href="http://www.rak.com"
                                                                      target="_blank">www.rak.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="your-name"><strong>Your Name:</strong></label>
                            <input
                                type="text"
                                id="your-name"
                                name="your-name"
                                className="form-input form-control"
                                placeholder="Insert Your Name"
                                required
                                value={name}
                                onChange={(e) => handleChange(e, 'Name')}
                            />

                            <label htmlFor="your-email"><strong>Your Email:</strong></label>
                            <input
                                type="email"
                                id="your-email"
                                name="your-email"
                                className="form-input form-control"
                                placeholder="Insert Your Email Address"
                                required
                                value={email}
                                onChange={(e) => handleChange(e, 'Email')}
                            />

                            <label htmlFor="your-message"><strong>Your Message:</strong></label>
                            <textarea
                                id="your-message"
                                name="your-message"
                                rows="4"
                                className="form-input form-control"
                                placeholder="Insert Your Message"
                                required
                                value={message}
                                onChange={(e) => handleChange(e, 'Message')}
                            />

                            <button type="submit" className="form-button">
                                <strong>Submit Message</strong>
                            </button>
                        </form>
                    </div>
                </main>
                <Footer/>
            </div>
        </Layout>
    );
}
export default Contact;