import React, { PropTypes } from 'react'
import QuestionItem from 'components/QuestionItem'

export const Viewer = props => {
  const {
    data, onAddChoice, onChangeRequired,
    onDeleteChoice, description,
    onChangeChoice,
    onEditTitle, onDeleteClick
  } = props

  return (
    <div>
      {description &&
        <header>Description: {description}</header>
      }

      {[data.length] &&
        data.map((item, id) => (
          <QuestionItem
            key={id}
            onAddChoice={onAddChoice}
            onChangeChoice={onChangeChoice}
            onDeleteChoice={onDeleteChoice}
            onChangeRequired={onChangeRequired}
            onEditTitle={onEditTitle}
            onDeleteClick={() => onDeleteClick(item)}
            {...item}
          />
        ))
      }
    </div>
  )
}

Viewer.propTypes = {
  data: PropTypes.array,
  description: PropTypes.string,
  onChangeRequired: PropTypes.func.isRequired,
  onEditTitle: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onAddChoice: PropTypes.func.isRequired,
  onChangeChoice: PropTypes.func.isRequired,
  onDeleteChoice: PropTypes.func.isRequired
}