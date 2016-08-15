import React from 'react'
import styles from './NotFoundPage.css'
import pic from './mars_attacks.jpg'

export const NotFoundPage = () => (
  <div className={styles.oops}>
    <div>404!</div>
    <img src={pic} alt="Mars Attacks" />
  </div>
)
