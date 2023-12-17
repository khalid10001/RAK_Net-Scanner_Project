import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logoHeader from "../img/logoHeader.png";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <Link to="/">
                <img src={logoHeader} alt="logo" className={styles.logo} />
            </Link>
            <nav className={`${styles.navigation} ${isMenuOpen ? styles.active : ''}`}>
                <Link to="/products" className={styles.navLink}>Product</Link>
                <Link to="/about" className={styles.navLink}>About</Link>
                <Link to="/services" className={styles.navLink}>Services</Link>
                <Link to="/contact" className={styles.navLink}>Contact</Link>
            </nav>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                <div className={isMenuOpen ? `${styles.bar} ${styles.cross}` : styles.bar}></div>
                <div className={isMenuOpen ? `${styles.bar} ${styles.cross}` : styles.bar}></div>
                <div className={isMenuOpen ? `${styles.bar} ${styles.cross}` : styles.bar}></div>
            </div>
        </header>
    );
};

export default Navbar;
