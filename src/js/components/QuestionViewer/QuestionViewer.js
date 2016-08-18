import React, { PropTypes } from 'react'
import { Input, TextArea, SelectElement } from 'components/uiToolkit'

export const QuestionViewer = props => {
  const { type, title, required, choices } = props

  return (
    <div>
      <h5>{title}</h5>
      <div>
        {type === 'file' || type === 'input' &&
          <div>
            <label>{title}</label>
            <Input
              type={type}
            />
          </div>
        }

        {type === 'paragraph' &&
          <TextArea
            label={title}
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
