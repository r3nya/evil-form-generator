import React, { Component, PropTypes } from 'react';
import Input from 'components/Input';
import ClickOutside from 'react-click-outside';
import styles from './QuestionItem.css';

export default class QuestionItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    title: PropTypes.string,
    required: PropTypes.bool,
    onEditTitle: PropTypes.func.isRequired,
    onChangeRequired: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
  };

  state = {
    titleEditMode: false,
    newTitle: ''
  };

  handleClickOutside = () => {
    this.pushNewTitle();
    this.editClose();
  };

  editTitle = () => {
    const { titleEditMode } = this.state;
    const { title } = this.props;
    this.setState({
      titleEditMode: !titleEditMode,
      newTitle: title
    });
    this.pushNewTitle();
  };

  editClose = () => {
    this.setState({
      titleEditMode: false
    });
  };

  pushNewTitle = () => {
    const { newTitle } = this.state;
    const { id, onEditTitle } = this.props;

    // todo
    // use trim() for newTitle

    if (newTitle) {
      onEditTitle({ id, newTitle });
      this.setState({
        newTitle: ''
      });
    }
  }

  handleChangeField = (field, text) => {
    this.setState({
      [field]: text
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.pushNewTitle();
      this.editClose();
    }
  };

  render() {
    const { id, title, required, /* type, */onChangeRequired, onDeleteClick } = this.props;
    const { titleEditMode, newTitle, isChecked } = this.state;

    return (
      <ClickOutside onClickOutside={this.handleClickOutside}>
        <div className={styles.frm}>
          <div className={styles.titleArea}>
            {!titleEditMode &&
              <span onClick={this.editTitle}>{title}</span>
            }

            {titleEditMode &&
              <Input
                type="text"
                value={newTitle}
                placeholder="Title?"
                onKeyPress={this.handleKeyPress}
                onChange={e => this.handleChangeField('newTitle', e.target.value)}
              />
            }

            {required &&
              <span className={styles.asterisk}>*</span>
            }
            <button onClick={this.editTitle}>Edit</button>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={required}
                onChange={() => onChangeRequired({ id, required: !required })}
              />
              Required?
            </label>
          </div>
          <button onClick={() => onDeleteClick()}>X</button>
        </div>
      </ClickOutside>
    );
  }
}
