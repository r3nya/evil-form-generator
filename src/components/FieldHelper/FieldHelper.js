import React, { PropTypes } from 'react';
import {
  Checkboxes,
  FileUpload,
  ParagraphText,
  RadioButtons,
  Select,
  SingleLineText
} from 'components/fields'

export const FieldHelper = props => {
  const { type/*, data */} = props

  console.log(type)

  return (
    <div>
      {type === 'checkbox' &&
        <Checkboxes />
      }

      {type === 'file' &&
        <FileUpload />
      }

      {type === 'paragraph' &&
        <ParagraphText />
      }

      {type === 'radio' &&
        <RadioButtons />
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
