import React, { PropTypes } from 'react'
import { ChoiceItem, Button } from 'components/uiToolkit'
import styles from './RadioButtons.css'

export const RadioButtons = props => {
  const { id, choices, onAddChoice, ...rest } = props

  return (
    <div className={styles.item}>
      {!!choices.length &&
        <fieldset>
          {choices.length && choices.map((choice, key) => (
            choice && <ChoiceItem
              id={id}
              key={key}
              type="radio"
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
        onClick={() => onAddChoice(id, 'radio')}
      >
        <i className="fa fa-plus" /> Add value
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
