import React, { PropTypes } from 'react'
import {
  FileUpload,
  ParagraphText,
  SingleLineText,
  ChoiceField
} from 'components/fields'

const { string } = PropTypes

export const FieldHelper = props => {
  const { type, className, ...rest } = props

  return (
    <div className={className}>
      {(type === 'checkbox' || type === 'radio' || type === 'select') &&
        <ChoiceField
          type={type}
          {...rest}
        />
      }

      {type === 'file' &&
        <FileUpload />
      }

      {type === 'paragraph' &&
        <ParagraphText {...rest} />
      }

      {type === 'input' &&
        <SingleLineText />
      }
    </div>
  )
}

FieldHelper.propTypes = {
  type: string.isRequired,
  className: string
}
