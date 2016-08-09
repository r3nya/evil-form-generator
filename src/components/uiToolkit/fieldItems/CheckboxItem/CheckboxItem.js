import React, { PropTypes } from 'react'
import { Input, DeleteIcon } from 'components/uiToolkit'

export const CheckboxItem = props => {
  const { label, onDeleteChoice } = props
  return (
    <div>
      <label>
        <Input type="checkbox" />
        {label}
      </label>
      <DeleteIcon
        onClick={onDeleteChoice}
      />
    </div>
  )
}

CheckboxItem.propTypes = {
  label: PropTypes.string,
  onDeleteChoice: PropTypes.func.isRequired,
}
