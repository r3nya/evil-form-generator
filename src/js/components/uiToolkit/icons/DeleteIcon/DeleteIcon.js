import React from 'react'
import cx from 'classnames'
import styles from './DeleteIcon.css'

export const DeleteIcon = props => (
  <i className={cx('fa fa-trash-o', styles.icon)} {...props} />
)
