import React, { PropTypes } from 'react'
import { Input, TextArea } from 'components/uiToolkit'

export const QuestionViewer = props => {
  const { type, title, required, choices } = props

  return (
    <div>
      {type === 'checkbox' &&
        <div>
          <h5>{title}</h5>
        </div>
      }

      {type === 'file' &&
        <div>file</div>
      }

      {type === 'paragraph' &&
        <div>file</div>
      }

      {type === 'radio' &&
        <div>file</div>
      }

      {type === 'select' &&
        <div>file</div>
      }

      {type === 'input' &&
        <div>file</div>
      }
    </div>
  )
}

QuestionViewer.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  choices: PropTypes.array,
}
