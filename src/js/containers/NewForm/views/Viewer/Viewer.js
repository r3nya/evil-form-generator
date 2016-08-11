import React, { PropTypes } from 'react'
import styles from './Viewer.css'

export const Viewer = props => {
  const { children, description } = props

  return (
    <div>
      <header>
        <h6 className={styles.description}>Description:&nbsp;
          <small>{description}</small>
        </h6>

      </header>

      <hr />

      {children}

    </div>
  )
}

Viewer.propTypes = {
  description: PropTypes.string,
  children: PropTypes.node.isRequired
}
