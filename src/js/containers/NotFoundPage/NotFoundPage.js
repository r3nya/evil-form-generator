import React from 'react'
import { Link } from 'react-router'
import styles from './NotFoundPage.css'
import pic from './mars_attacks.jpg'

export const NotFoundPage = () => (
  <div className={styles.oops}>
    <div>404!</div>
    <Link to="/">
      <img src={pic} alt="Mars Attacks" />
    </Link>
  </div>
)
