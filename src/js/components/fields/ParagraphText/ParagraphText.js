import React, { PropTypes } from 'react'
import { TextArea, Button, EditIcon } from 'components/uiToolkit'
import styles from './ParagraphText.css'

export const ParagraphText = props => {

  return (
    <div className={styles.group}>
      <TextArea
        type="text"
        className={styles.input}
        placeholder="Input text here…"
        rows="4"
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
