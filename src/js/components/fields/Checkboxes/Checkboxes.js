import React, { PropTypes } from 'react'
import { RadioCheckboxItem, Button } from 'components/uiToolkit'

export const Checkboxes = props => {
  const { id, choices, onAddChoice, ...rest } = props

  return (
    <div>
      {!!choices.length &&
        <fieldset>
          {choices.length && choices.map((choice, key) => (
            <RadioCheckboxItem
              id={id}
              key={key}
              type="checkbox"
              number={key}
              label={choice}
              {...rest}
            />
          ))}
        </fieldset>
      }
      <Button
        size="small"
        style="transparent"
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
