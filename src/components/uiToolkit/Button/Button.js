import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import cx from 'classnames'
import styles from './Button.css'

export const Button = props => {
  const { children, className, size, disabled, to, style, ...rest } = props
  const Element = to ? Link : 'button'
  const aria = to ? 'link' : 'button'
  const classes = cx(styles.button, className, {
    [styles.outline]: style === 'outline',
    [styles.primary]: style === 'primary',
    [styles.large]: size === 'large',
    [styles.small]: size === 'small',
    [styles.disabled]: disabled
  })

  return (
    <Element
      {...rest}
      role={aria}
      to={to}
      className={classes}
    >
      {children}
    </Element>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'small']),
  disabled: PropTypes.bool,
  to: PropTypes.string,
  style: PropTypes.oneOf(['outline', 'primary'])
}
