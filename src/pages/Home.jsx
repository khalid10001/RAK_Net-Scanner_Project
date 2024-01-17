import React from 'react';
import styles from "../css/Home.module.css";  // Import the CSS module

import Navbar from '../component/Navbar';
import backgroundVideo from '../videos/background.mp4';
import Layout from "../component/Layout";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Layout title={"Home |RAK"}>
            <div className={styles.videoContainer}>
                <video autoPlay muted loop  className={styles.backgroundVideo}>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                <Navbar />
                <main className={styles.homeContainer}>
                    <div className={styles.emptyBox}></div>

                    <div className={styles.textBox}>
                        <h1 className={styles.h1}>The essential <br />
                            <span className={styles.rakHighlight}>RAK</span> testing <br />
                            tools, all in one <br /> place </h1>

                        <p className={styles.p}>RAK-Tools makes it easy for security teams to discover,<br /> exploit, and report common
                            vulnerabilities while saving time <br />for custom work and more creative hacking.</p>

                        <div className={styles.bulletPoints}>
                            <ul>
                                <li>Eliminate the cost of multiple scanners</li>
                                <li>Reduce repetitive work</li>
                            </ul>
                        </div>

                        <div className={styles.buttonContainer}>
                            <Link to="/products" className={styles.button + ' ' + styles.buttonOne}>Start RAK</Link>
                            <Link to="/services" className={styles.button + ' ' + styles.buttonTwo}>Learn More</Link>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    );
}

export default Home;
