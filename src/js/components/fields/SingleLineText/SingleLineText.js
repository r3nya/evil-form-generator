import React from 'react'
import { Input } from 'components/uiToolkit'
import styles from './SingleLineText.css'

export const SingleLineText = () => (
  <Input
    type="text"
    className={styles.input}
    disabled="disabled"
  />
)
