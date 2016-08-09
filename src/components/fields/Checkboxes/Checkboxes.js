import React, { PropTypes } from 'react'
import { CheckboxItem, Button } from 'components/uiToolkit'

export const Checkboxes = props => {
  const { id, choices, onAddChoice, onDeleteChoice } = props

  return (
    <div>
      <fieldset>
        {[choices.length] && choices.map((choice, key) => (
          <CheckboxItem
            key={key}
            label={choice}
            onDeleteChoice={() => onDeleteChoice(id, key)}
          />
        ))}
      </fieldset>
      <Button
        size="small"
        onClick={() => onAddChoice(id, 'checkbox')}
      >
        <i className="fa fa-plus" /> Add Choice
      </Button>
    </div>
  )
}

Checkboxes.propTypes = {
  id: PropTypes.number,
  choices: PropTypes.array,
  onAddChoice: PropTypes.func,
  onDeleteChoice: PropTypes.func,
}
