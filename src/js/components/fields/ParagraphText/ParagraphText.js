import React from 'react'
import { TextArea } from 'components/uiToolkit'
import styles from './ParagraphText.css'


export const ParagraphText = () => (
  <div className={styles.group}>
    <TextArea
      type="text"
      className={styles.input}
      placeholder="Text area"
      rows="4"
      disabled
    />
  </div>
)
