import React from 'react'
import { Button } from 'components/uiToolkit'

export const BackBtn = props => {
  return (
    <Button {...props}>
      <i className="fa fa-chevron-left"></i> Back
    </Button>
  )
}
