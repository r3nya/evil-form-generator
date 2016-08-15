import React from 'react'
import { Link } from 'react-router'
import styles from './Header.css'

export const Header = () => (
  <header className={styles.header} role="banner">
    <h1>
      <Link to="/new">
        <i className="fa fa-plus-circle"></i> New form
      </Link>
    </h1>
  </header>
)
