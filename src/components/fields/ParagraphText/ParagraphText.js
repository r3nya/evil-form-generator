import React, { PropTypes } from 'react'
import { Input, Button, EditIcon } from 'components/uiToolkit'
import styles from './ParagraphText.css'

export const ParagraphText = props => {

  return (
    <div className={styles.group}>
      <Input type="text" placeholder="Input text here…" />
      <span className={styles.groupBtn}>
        <Button className="btn btn-secondary" type="button">
          <EditIcon />
        </Button>
      </span>
    </div>
  )
}

ParagraphText.propTypes = {

}
