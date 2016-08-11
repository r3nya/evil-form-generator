import React, { Component, PropTypes } from 'react'
import ClickOutside from 'react-click-outside'
import {
  DragSource as dragSource,
  DropTarget as dropTarget
} from 'react-dnd'
import { FieldHelper } from 'components/FieldHelper'
import { itemSource, itemTarget } from 'utils'
import { Button, EditIcon, DeleteIcon, Input, DragArea } from 'components/uiToolkit'
import cx from 'classnames'
import styles from './QuestionItem.css'

@dropTarget('ITEM', itemTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@dragSource('ITEM', itemSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))
export default class QuestionItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    title: PropTypes.string,
    required: PropTypes.bool,
    isDragging: PropTypes.bool.isRequired,
    onEditTitle: PropTypes.func.isRequired,
    onChangeRequired: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired
  };

  state = {
    titleEditMode: false,
    newTitle: '…'
  };

  handleClickOutside = () => {
    this.pushNewTitle()
    this.editClose()
  }

  editTitle = () => {
    const { titleEditMode } = this.state
    const { title } = this.props
    this.setState({
      titleEditMode: !titleEditMode,
      newTitle: title
    })
    this.pushNewTitle()
  }

  editClose = () => {
    this.setState({
      titleEditMode: false
    })
  }

  pushNewTitle = () => {
    const { newTitle } = this.state
    const { id, onEditTitle } = this.props

    if (newTitle) {
      onEditTitle({ id, newTitle })
      this.setState({
        newTitle: ''
      })
    }
  }

  handleChangeField = (field, text) => {
    this.setState({
      [field]: text
    })
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.pushNewTitle()
      this.editClose()
    }
  };

  render() {
    const {
      id, title, required, type, onChangeRequired,
      onDeleteClick, isDragging, connectDragSource, connectDropTarget,
      connectDragPreview,
      ...rest
    } = this.props
    const { titleEditMode, newTitle } = this.state

    const opacity = isDragging ? 0 : 1

    return connectDragPreview(connectDropTarget((
      <div style={{ opacity }}>
        <ClickOutside onClickOutside={this.handleClickOutside}>
          <div className={cx('grid grid__middle', styles.frm)}>
            {connectDragSource(
              <div>
                <DragArea className="cell cell__fill" />
              </div>
            )}
            <div className={cx('cell cell__5of12 grid grid__middle grid__left', styles.titleArea)}>
              {!titleEditMode &&
                <span onClick={this.editTitle}>{title}</span>
              }

              {titleEditMode &&
                <Input
                  type="text"
                  value={newTitle}
                  placeholder="Title?"
                  className="cell cell__9of12"
                  onKeyPress={this.handleKeyPress}
                  onChange={e => this.handleChangeField('newTitle', e.target.value.trim())}
                />
              }

              <span className={cx('cell cell_1of12', styles.asterisk)}>
                {required && ['*']}
              </span>

              <Button
                className={cx('cell cell__2of12', styles.editBtn)}
                style="transparent"
                onClick={this.editTitle}
              >
                <EditIcon />
              </Button>
            </div>

            <FieldHelper
              id={id}
              className={cx('cell сell__fill', styles.fields)}
              type={type}
              {...rest}
            />

            <div className={cx('cell cell__2of12 grid grid__around grid__middle', styles.extra)}>
              <div className={styles.req}>
                <input
                  type="checkbox"
                  checked={required}
                  onChange={() => onChangeRequired({ id, required: !required })}
                />
              </div>
              <div className={styles.del}>
                <Button
                  style="outline"
                  onClick={() => onDeleteClick()}
                >
                  <DeleteIcon />
                </Button>
              </div>
            </div>
          </div>
        </ClickOutside>
      </div>
    )))
  }
}
