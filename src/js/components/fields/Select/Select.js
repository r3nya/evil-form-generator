import React, { PropTypes } from 'react'
import { SelectElement, ChoiceItem, Button } from 'components/uiToolkit'
import './Select.css'

export const Select = props => {
  const { id, choices, onAddChoice, ...rest } = props

  return (
    <div>
      <SelectElement
        className="not-xs"
        options={choices}
      />

      <br
        className="not-xs"
      />

      {!!choices.length &&
        <fieldset>
          {choices.length && choices.map((choice, key) => (
            <ChoiceItem
              id={id}
              key={key}
              type="text"
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
        onClick={() => onAddChoice(id, 'select')}
      >
        <i className="fa fa-plus" /> Add value
      </Button>
    </div>
  )
}

Select.propTypes = {
  id: PropTypes.number,
  choices: PropTypes.array,
  onAddChoice: PropTypes.func,
  onChangeChoice: PropTypes.func,
  onDeleteChoice: PropTypes.func
}
