import React, { PropTypes } from 'react'
import styles from './Header.css'

const { string } = PropTypes

export const Header = props => {
  const { description, createdAt } = props

  return (
    <header className={styles.header}>
      {description &&
        <h1>{description}</h1>
      }
      <h6>Created at {createdAt}</h6>
    </header>
  )
}

Header.propTypes = {
  description: string,
  createdAt: string,
}
