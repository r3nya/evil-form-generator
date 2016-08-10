import React, { PropTypes } from 'react'
import { CheckboxItem, Button } from 'components/uiToolkit'

export const Checkboxes = props => {
  const { id, choices, onAddChoice, ...rest } = props

  return (
    <div>
      {[choices.length] && choices.map((choice, key) => (
        <fieldset key={key}>
          <CheckboxItem
            id={id}
            number={key}
            label={choice}
            {...rest}
          />
        </fieldset>
      ))}
      <Button
        size="small"
        style="outline"
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
