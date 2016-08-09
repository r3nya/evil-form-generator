import React, { PropTypes } from 'react'
import { Input, DeleteIcon } from 'components/uiToolkit'

export const RadioItem = props => {
  const { label, onDeleteChoice } = props
  return (
    <div>
      <label>
        <Input type="radio" />
        {label}
      </label>
      <DeleteIcon
        onClick={onDeleteChoice}
      />
    </div>
  )
}

RadioItem.propTypes = {
  label: PropTypes.string,
  onDeleteChoice: PropTypes.func.isRequired,
}
