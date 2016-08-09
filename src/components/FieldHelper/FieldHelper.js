import React, { PropTypes } from 'react'
import {
  Checkboxes,
  FileUpload,
  ParagraphText,
  RadioButtons,
  Select,
  SingleLineText
} from 'components/fields'

export const FieldHelper = props => {
  const { type, ...rest } = props

  return (
    <div>
      {type === 'checkbox' &&
        <Checkboxes {...rest} />
      }

      {type === 'file' &&
        <FileUpload />
      }

      {type === 'paragraph' &&
        <ParagraphText />
      }

      {type === 'radio' &&
        <RadioButtons {...rest} />
      }

      {type === 'select' &&
        <Select />
      }

      {type === 'input' &&
        <SingleLineText />
      }
    </div>
  )
}

FieldHelper.propTypes = {
  type: PropTypes.string.isRequired,
}
