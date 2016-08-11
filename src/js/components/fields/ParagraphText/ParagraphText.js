import React, { PropTypes } from 'react'
import { Input, Button, EditIcon } from 'components/uiToolkit'
import styles from './ParagraphText.css'

export const ParagraphText = props => {

  return (
    <div className={styles.group}>
      <Input
        type="text"
        className={styles.input}
        placeholder="Input text here…"
      />
      <span className={styles.groupBtn}>
        <Button
          style="transparent"
        >
          <EditIcon />
        </Button>
      </span>
    </div>
  )
}

ParagraphText.propTypes = {

}
