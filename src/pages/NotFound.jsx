import React from 'react';
import styles from '../css/NotFound.module.css';
import {Link} from 'react-router-dom';
import Layout from '../component/Layout';

const NotFound = () => {
    return (
        <Layout title={'404 | RAK'}>
            <div className={styles.root}>
                <div className={styles.notFoundContainer}>
                    <h1 className={styles.errorHeading}>404</h1>
                    <p className={styles.errorMessage}>Page not found</p>
                    <p>
                        <Link to="/" className={styles.backToHome}>
                            Back to Home
                        </Link>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default NotFound;

