import React, { Component, PropTypes } from 'react'
import ClickOutside from 'react-click-outside'
import { Input, EditIcon, DeleteIcon } from 'components/uiToolkit'

export default class RadioItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string,
    number: PropTypes.number.isRequired,
    onChangeChoice: PropTypes.func.isRequired,
    onDeleteChoice: PropTypes.func.isRequired,
  };

  state = {
    editMode: false,
    newValue: ''
  };

  handleClickOutside = () => {
    this.pushNewValue()
    this.editClose()
  }

  handleEdit = () => {
    const { editMode } = this.state
    const { label } = this.props

    this.setState({
      editMode: !editMode,
      newValue: label
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
  }

  editClose = () => {
    this.setState({
      editMode: false
    })
  }

  pushNewValue = () => {
    const { newValue } = this.state
    const { id, number, onChangeChoice } = this.props

    if (newValue) {
      onChangeChoice(id, number, newValue)
      this.setState({
        newValue: ''
      })
    }
  }

  render() {
    const { id, label, number, onDeleteChoice } = this.props
    const { editMode, newValue } = this.state

    return (
      <ClickOutside onClickOutside={this.handleClickOutside}>
        <div>

          {!editMode &&
            <label>
              <Input type="radio" />
              {label}
            </label>
          }

          {editMode &&
            <Input
              type="text"
              value={newValue}
              placeholder="?"
              onKeyPress={this.handleKeyPress}
              onChange={e => this.handleChangeField('newValue', e.target.value)}
            />
          }

          <EditIcon
            onClick={this.handleEdit}
          />
          <DeleteIcon
            onClick={() => onDeleteChoice(id, number)}
          />
        </div>
      </ClickOutside>
    )
  }
}
