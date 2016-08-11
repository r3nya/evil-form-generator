import React, { PropTypes } from 'react'
import { SelectElement, RadioCheckboxItem, Button } from 'components/uiToolkit'

export const Select = props => {
  const { id, choices, onAddChoice, ...rest } = props

  return (
    <div>
      <SelectElement
        options={choices}
      />

      <br />

      {!!choices.length &&
        <fieldset>
          {choices.length && choices.map((choice, key) => (
            <RadioCheckboxItem
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
        <i className="fa fa-plus" /> Add Choice
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
