import React, { PropTypes } from 'react'
import cx from 'classnames'
import styles from './Alert.css'

const { string, oneOf, func } = PropTypes

export const Alert = ({ message, className, type, onCloseClick, ...rest }) => {
  const classes = cx(styles.alert, className, {
    [styles.success]: type === 'success',
    [styles.danger]: type === 'danger'
  })

  return (
    <div
      role="alert"
      className={classes}
      onClick={onCloseClick}
      {...rest}
    >
      {message}
    </div>
  )
}

Alert.propTypes = {
  message: string,
  className: string,
  type: oneOf(['success', 'danger']),
  onCloseClick: func
}
