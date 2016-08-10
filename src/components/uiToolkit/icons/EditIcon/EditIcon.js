import React from 'react'
import cx from 'classnames'
import styles from './EditIcon.css'

export const EditIcon = props => (
  <i className={cx('fa fa-pencil', styles.icon)} {...props} />
)
