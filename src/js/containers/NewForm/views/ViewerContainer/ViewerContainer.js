import React, { PropTypes } from 'react'
import QuestionItem from 'components/QuestionItem'
import { SortableContainer as sortableContainer } from 'react-sortable-hoc'

const { array, func } = PropTypes

export const ViewerContainer = sortableContainer(({ data, onDeleteClick, ...rest }) => (
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
))

ViewerContainer.propTypes = {
  data: array,
  onDeleteClick: func.isRequired
}
