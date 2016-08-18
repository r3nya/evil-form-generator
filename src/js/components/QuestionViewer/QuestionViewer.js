import React, { PropTypes } from 'react'
import { Input, TextArea, SelectElement } from 'components/uiToolkit'
import styles from './QuestionViewer.css'

export const QuestionViewer = props => {
  const { type, title, required, choices } = props

  return (
    <div className={styles.item}>
      <h5>{title}</h5>
      <div className={styles.subj}>
        {(type === 'file' || type === 'input') &&
          <Input
            type={type}
          />
        }

        {type === 'paragraph' &&
          <TextArea
            rows="4"
          />
        }

        {(type === 'checkbox' || type === 'radio') &&
          choices.map((item, key) => (
            <label key={key}>
              <Input
                type={type}
              />
              {item}
            </label>
          ))
        }

        {type === 'select' &&
          <SelectElement
            options={choices}
          />
        }
      </div>
    </div>
  )
}

QuestionViewer.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  choices: PropTypes.array,
}
