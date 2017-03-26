import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import cx from 'classnames'
import styles from './Button.css'

const { node, string, bool, oneOf } = PropTypes

export const Button = props => {
  const { children, className, size, button, disabled, to, style, ...rest } = props
  const Element = to ? Link : 'button'
  const aria = to ? 'link' : 'button'
  const classes = cx(styles.button, className, {
    [styles.outline]: style === 'outline',
    [styles.primary]: style === 'primary',
    [styles.delete]: style === 'delete',
    [styles.button]: button,
    [styles.transparent]: style === 'transparent',
    [styles.transparent_primary]: style === 'transparent-primary',
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
  children: node,
  className: string,
  active: bool,
  size: oneOf(['large', 'small']),
  button: bool,
  disabled: bool,
  to: string,
  style: oneOf([
    'outline', 'primary', 'transparent', 'delete', 'transparent-primary'
  ])
}
