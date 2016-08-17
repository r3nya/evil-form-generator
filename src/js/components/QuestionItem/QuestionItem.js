import React, { Component, PropTypes } from 'react'
import ClickOutside from 'react-click-outside'
import { FieldHelper } from 'components/FieldHelper'
import { SortableElement as sortableElement } from 'react-sortable-hoc'
import { Button, EditIcon, DeleteIcon, Input, DragArea } from 'components/uiToolkit'
import cx from 'classnames'
import styles from './QuestionItem.css'


class QuestionItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    title: PropTypes.string,
    required: PropTypes.bool,
    onEditTitle: PropTypes.func.isRequired,
    onChangeRequired: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
  };

  state = {
    titleEditMode: true,
    newTitle: '',
    status: '',
    error: false
  };

  handleClickOutside = () => {
    const { title } = this.props

    if (!title) {
      this.setState({
        error: true
      })
    } else {
      this.setState({
        error: false
      })
    }

    this.pushNewTitle()
    this.editClose()
  }

  editTitle = () => {
    const { titleEditMode } = this.state
    const { title } = this.props

    if (title) {
      this.setState({
        error: false
      })
    }

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

    if (newTitle && newTitle.replace(/\s/g, '').length) {
      onEditTitle({
        id,
        newTitle: newTitle.trim()
      })

      this.setState({
        newTitle: '',
        error: false,
        status: 'success'
      })
    }
  }

  handleChangeField = (field, text) => {
    this.setState({
      [field]: text
    })

    if (text.trim().length > 0) {
      this.setState({
        status: 'success'
      })
    } else {
      this.setState({
        status: 'error'
      })
    }
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.pushNewTitle()
      this.editClose()
    }
  };

  render() {
    const {
      id, title, required, type,
      onChangeRequired, onDeleteClick, ...rest
    } = this.props
    const { titleEditMode, newTitle, status, error } = this.state

    return (
      <div>
        <ClickOutside onClickOutside={this.handleClickOutside}>
          <div
            className={cx('grid grid__middle',
            styles.frm, { [styles.danger]: error })}
          >
            <div className={styles.dragArea}>
              <DragArea className="cell" />
            </div>
            <div className={cx('grid grid__middle', styles.other)}>
              <div
                className={cx('cell cell__12of12',
                'cell__sm__5of12 grid grid__middle grid__left',
                styles.titleArea)}
              >
                {!titleEditMode &&
                  <span
                    className={cx('cell cell__10of12', styles.input)}
                    onClick={this.editTitle}
                  >
                    {title}
                  </span>
                }

                {titleEditMode &&
                  <Input
                    type="text"
                    value={newTitle}
                    placeholder={type}
                    status={status}
                    className="cell cell__10of12"
                    onKeyPress={this.handleKeyPress}
                    onChange={e => this.handleChangeField('newTitle', e.target.value)}
                  />
                }

                <span className={cx('cell cell_1of12', styles.asterisk)}>
                  {required && ['*']}
                </span>

                <Button
                  className={cx('cell cell__1of12', styles.editBtn)}
                  style="transparent"
                  onClick={this.editTitle}
                >
                  <EditIcon />
                </Button>
              </div>

              <FieldHelper
                id={id}
                className={cx('cell cell__12of12 сell__sm__fill', styles.fields)}
                type={type}
                {...rest}
              />

              <div
                className={cx('cell cell__12of12 cell__sm__2of12',
                'grid grid__middle', styles.extra)}
              >
                <div className={styles.req}>
                  <input
                    type="checkbox"
                    checked={required}
                    onChange={() => onChangeRequired({ id, required: !required })}
                  />
                  <span className="xs-only">Required?</span>
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
          </div>
        </ClickOutside>
      </div>
    )
  }
}

export default sortableElement(QuestionItem)
