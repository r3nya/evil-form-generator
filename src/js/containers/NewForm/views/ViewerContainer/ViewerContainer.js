import React, { Component, PropTypes } from 'react'
import QuestionItem from 'components/QuestionItem'
import { SortableContainer as sortableContainer } from 'react-sortable-hoc'


class ViewerContainer extends Component {
  static propTypes = {
    data: PropTypes.array,
    onDragQuestion: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
  };

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

export default sortableContainer(ViewerContainer)
