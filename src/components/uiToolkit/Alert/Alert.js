import React, { PropTypes } from 'react'
import cx from 'classnames'
import styles from './Alert'

export const Alert = props => {
  const { children, className, type, ...rest } = props
  const classes = cx(styles.alert, className, {
    [styles.success]: type === 'success',
    [styles.danger]: type === 'danger'
  })
  return (
    <div
      className={classes}
      {...rest}
    >
      {children}
    </div>
  )
}

Alert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(['success', 'danger']),
}
