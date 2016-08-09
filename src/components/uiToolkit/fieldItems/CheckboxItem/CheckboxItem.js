import React, { PropTypes } from 'react'
import { Input } from 'components/uiToolkit'

export const CheckboxItem = props => {
  const { label } = props
  return (
    <div>
      <label>
        <Input type="checkbox" />
        {label}
      </label>
    </div>
  )
}

CheckboxItem.propTypes = {
  label: PropTypes.string,
}
