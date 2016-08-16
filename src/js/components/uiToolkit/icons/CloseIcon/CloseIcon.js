import React from 'react'
import cx from 'classnames'
import styles from './CloseIcon.css'

export const CloseIcon = props => (
  <i className={cx('fa fa-times', styles.icon)} {...props}></i>
)
