import React, { PropTypes } from 'react'
import QuestionItem from 'components/QuestionItem'
import { SortableContainer as sortableContainer } from 'react-sortable-hoc'


export const ViewerContainer = sortableContainer(props => {
  const { data, onDeleteClick, ...rest } = props

  return (
    <div>
      {[data.length] &&
        data.map((item, id) => (
          <QuestionItem
            id={item.id}
            key={item.id}
            index={id}
            onDeleteClick={() => onDeleteClick(item)}
            {...rest}
            {...item}
          />
        ))
      }
    </div>
  )
})

ViewerContainer.propTypes = {
  data: PropTypes.array,
  onDeleteClick: PropTypes.func.isRequired
}
