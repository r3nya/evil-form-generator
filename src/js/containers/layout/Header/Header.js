import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { BackBtn } from 'components/uiToolkit'
import styles from './Header.css'

export const Header = props => {
  const { backBtn, backUrlType } = props

  return (
    <header className={styles.header} role="banner">
      {backBtn &&
        <BackBtn
          className={styles.backBtn}
          to={`/${backUrlType}`}
        />
      }
      <h1>
        <Link
          role="link"
          className={styles.newForm}
          to="/new"
        >
          <i className="fa fa-plus-circle"></i> New form
        </Link>
      </h1>
    </header>
  )
}

Header.propTypes = {
  backBtn: PropTypes.bool,
  backUrlType: PropTypes.string,
}
