import React, { PropTypes } from 'react'
import cx from 'classnames'
import styles from './Input.css'

export const Input = props => {
  const { className, status, ...rest } = props
  const classes = cx(styles.input, className, {
    [styles.error]: status === 'error'
  })

  return (
    <input
      className={classes}
      autoCapitalize="off"
      autoCorrect="off"
      {...rest}
    />
  )
}

Input.propTypes = {
  className: PropTypes.string,
  status: PropTypes.string,
}
