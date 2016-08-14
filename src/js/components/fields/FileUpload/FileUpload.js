import React from 'react'
import { Input } from 'components/uiToolkit'
import cx from 'classnames'
import styles from './FileUpload.css'

export const FileUpload = () => (
  <Input
    type="file"
    className={cx('not-allowed', styles.input)}
    disabled="disabled"
  />
)
