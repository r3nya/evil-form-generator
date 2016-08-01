import React from 'react';
import { Link } from 'react-router';
import styles from './Header.css';

export const Header = () => (
  <header className={styles.header} role="banner">
    <nav className={styles.nav} role="navigation">
      <Link to="/home">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/services">Services</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  </header>
);
