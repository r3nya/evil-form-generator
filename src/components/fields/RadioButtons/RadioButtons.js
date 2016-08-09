import React, { PropTypes } from 'react'
import { RadioItem, Button } from 'components/uiToolkit'

export const RadioButtons = props => {
  const { id, choices, onAddChoice, onDeleteChoice } = props

  return (
    <div>
      <fieldset>
        {[choices.length] && choices.map((choice, key) => (
          <RadioItem
            key={key}
            label={choice}
            onDeleteChoice={() => onDeleteChoice(id, key)}
          />
        ))}
      </fieldset>
      <Button
        size="small"
        onClick={() => onAddChoice(id, 'radio')}
      >
        <i className="fa fa-plus" /> Add Choice
      </Button>
    </div>
  )
}

RadioButtons.propTypes = {
  id: PropTypes.number,
  onAddChoice: PropTypes.func
}
