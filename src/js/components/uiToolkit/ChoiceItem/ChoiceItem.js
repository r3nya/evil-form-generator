import React, { Component, PropTypes } from 'react'
import ClickOutside from 'react-click-outside'
import { Input, Button, EditIcon, DeleteIcon } from 'components/uiToolkit'
import cx from 'classnames'
import styles from './ChoiceItem.css'

export default class ChoiceItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    questionId: PropTypes.number.isRequired,
    onChangeChoice: PropTypes.func.isRequired,
    onDeleteChoice: PropTypes.func.isRequired,
  };

  state = {
    editMode: false,
    newValue: '',
    status: ''
  };

  handleClickOutside = () => {
    this.pushNewValue()
    this.editClose()
  }

  handleEdit = () => {
    const { editMode } = this.state
    const { value } = this.props

    this.setState({
      editMode: !editMode,
      newValue: value
    })

    this.pushNewValue()
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.pushNewValue()
      this.editClose()
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
  }

  editClose = () => {
    this.setState({
      editMode: false
    })
  }

  pushNewValue = () => {
    const { newValue } = this.state
    const { id, questionId, onChangeChoice } = this.props

    if (newValue && newValue.replace(/\s/g, '').length) {
      onChangeChoice(id, questionId, newValue.trim())
      this.setState({
        newValue: '',
        status: 'success'
      })
    }
  }

  render() {
    const { id, value, type, questionId, onDeleteChoice } = this.props
    const { editMode, newValue, status } = this.state

    return (
      <ClickOutside onClickOutside={this.handleClickOutside}>
        <div className={cx('grid grid__middle grid__between', styles.row)}>

          {!editMode &&
            <label
              className={cx('cell cell__9of12 cell__md__10of12', styles.label)}
              onClick={this.handleEdit}
            >
              {type !== 'select' &&
                <Input
                  type={type}
                  className="not-allowed"
                  disabled="disabled"
                />
              }
              {value}
            </label>
          }

          {editMode &&
            <Input
              type="text"
              value={newValue}
              placeholder="?"
              status={status}
              className={cx('cell cell__9of12 cell__sm__10of12', styles.input)}
              onKeyPress={this.handleKeyPress}
              onChange={e => this.handleChangeField('newValue', e.target.value)}
            />
          }

          <div className="cell cell__2of12 grid grid__right grid__no-wrap">
            <Button
              size="small"
              style="transparent"
              onClick={this.handleEdit}
            >
              <EditIcon />
            </Button>

            <Button
              size="small"
              style="transparent"
              onClick={() => onDeleteChoice(id, questionId)}
            >
              <DeleteIcon />
            </Button>
          </div>
        </div>
      </ClickOutside>
    )
  }
}
