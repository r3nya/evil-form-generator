import React from 'react'
import { Button } from 'components/uiToolkit'
import styles from './BackBtn.css'

export const BackBtn = props => {
  return (
    <Button {...props}>
      <i className="fa fa-chevron-left"></i>
      <span className={styles.txt}> Back</span>
    </Button>
  )
}
