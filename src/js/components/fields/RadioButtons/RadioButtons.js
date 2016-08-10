import React, { PropTypes } from 'react'
import { RadioItem, Button } from 'components/uiToolkit'

export const RadioButtons = props => {
  const { id, choices, onAddChoice, ...rest } = props

  return (
    <div>
      {[choices.length] && choices.map((choice, key) => (
        <fieldset key={key}>
          <RadioItem
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
        onClick={() => onAddChoice(id, 'radio')}
      >
        <i className="fa fa-plus" /> Add Choice
      </Button>
    </div>
  )
}

RadioButtons.propTypes = {
  id: PropTypes.number,
  choices: PropTypes.array,
  onAddChoice: PropTypes.func,
  onChangeChoice: PropTypes.func,
  onDeleteChoice: PropTypes.func
}
