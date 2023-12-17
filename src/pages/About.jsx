import "../css/About.css"
import photo from "../img/aboutUs.png";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Layout from '../component/Layout';

const About = () => {

    return (
        <Layout title="About Us | RAK">
            <div className='aboutUs-container'>
                <Navbar/>
                <main>
                    <div className="about-section">
                        <div className="left-side">
                            <h2>About Us</h2>
                            <img src={photo} alt="About Us Image"/>
                        </div>

                        <div className="right-side">
                            <ul>
                                <li>

                                    <ul>
                                        <li className="value">
                                            <h4>Mission</h4>
                                            <p>Help our customers easily detect and understand vulnerabilities in their
                                                systems and infrastructures.</p>
                                        </li>
                                        <li className="value">
                                            <h4>Vision</h4>
                                            <p>Build the most intuitive and easy-to-use penetration testing and
                                                vulnerability
                                                assessment platform.</p>
                                        </li>
                                        <li className="value">
                                            <h4>Ethics</h4>
                                            <p>We are committed to stick to the White side of hacking and we do not
                                                encourage
                                                any unethical activities.</p>
                                        </li>
                                        <li className="value">
                                            <h4>Trust</h4>
                                            <p>We deliver what we promise and we value our customers' trust in
                                                everything we
                                                do.</p>
                                        </li>
                                        <li className="value">
                                            <h4>Quality</h4>
                                            <p>We don't like poorly written software and unreliable results. That's why
                                                we
                                                strive to build a platform our users can always rely on.</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="tick">
                                <li>
                                    <span className="tick-line"></span>
                                    Understand the business logic of every target
                                </li>
                                <li>
                                    <span className="tick-line"></span>
                                    Tailor attacks as real-world adversaries
                                </li>
                                <li>
                                    <span className="tick-line"></span>
                                    Manually exploit vulnerabilities to assess risk
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        </Layout>
    );
};
export default About;