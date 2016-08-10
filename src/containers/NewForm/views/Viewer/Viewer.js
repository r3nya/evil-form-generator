import React, { PropTypes } from 'react'
import QuestionItem from 'components/QuestionItem'
import styles from './Viewer.css'

export const Viewer = props => {
  const {
    data, onAddChoice, onChangeRequired,
    onDeleteChoice,
    onEditTitle, onDeleteClick
  } = props

  return (
    <div className={styles.bg}>
      {[data.length] &&
        data.map((item, id) => (
          <QuestionItem
            key={id}
            onAddChoice={onAddChoice}
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
  onChangeRequired: PropTypes.func.isRequired,
  onEditTitle: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onAddChoice: PropTypes.func.isRequired,
  onDeleteChoice: PropTypes.func.isRequired
}
