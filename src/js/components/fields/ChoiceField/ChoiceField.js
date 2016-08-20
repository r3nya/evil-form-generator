import React, { PropTypes } from 'react'
import { ChoiceItem, Button } from 'components/uiToolkit'
import styles from './ChoiceField.css'

export const ChoiceField = props => {
  const { id, choices, type, onAddChoice, ...rest } = props

  return (
    <div className={styles.item}>
      {!!choices.length &&
        <fieldset className={styles.fset}>
          {choices.length && choices.map((choice, key) => (
            <ChoiceItem
              key={key}
              type={type}
              {...choice}
              {...rest}
            />
          ))}
        </fieldset>
      }

      <Button
        size="small"
        style="transparent"
        onClick={() => onAddChoice(id, type)}
      >
        <i className="fa fa-plus" /> Add value
      </Button>
    </div>
  )
}

ChoiceField.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  choices: PropTypes.array,
  onAddChoice: PropTypes.func,
}
