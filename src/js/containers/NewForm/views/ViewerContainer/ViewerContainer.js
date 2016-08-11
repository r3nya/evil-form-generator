import React, { Component, PropTypes } from 'react'
import { DragDropContext as dragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import update from 'react/lib/update'
import QuestionItem from 'components/QuestionItem'


@dragDropContext(HTML5Backend)
export default class ViewerContainer extends Component {
  static propTypes = {
    data: PropTypes.array,
    onDragQuestion: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
  };

  moveItem = (dragIndex, hoverIndex) => {
    const { data, onDragQuestion } = this.props

    const dragItem = data[dragIndex]

    const newState = update(data, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragItem]
      ]
    })

    onDragQuestion(newState)
  }

  render() {
    const { data, onDeleteClick, ...rest } = this.props

    return (
      <div>
        {[data.length] &&
          data.map((item, id) => (
            <QuestionItem
              id={item.id}
              key={item.id}
              index={id}
              onDeleteClick={() => onDeleteClick(item)}
              moveItem={this.moveItem}
              {...rest}
              {...item}
            />
          ))
        }
      </div>
    )
  }
}
