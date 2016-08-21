import React, { Component, PropTypes } from 'react'
import { RadioGroup, Radio } from 'react-radio-group'
import { Input, TextArea, SelectElement } from 'components/uiToolkit'
import ReactTooltip from 'react-tooltip'
import cx from 'classnames'
import styles from './QuestionViewer.css'


export default class QuestionViewer extends Component {
  static propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    required: PropTypes.bool,
    choices: PropTypes.array,
  };

  state = {
    selectedValue: ''
  };

  handleRadioChange = value => {
    this.setState({
      selectedValue: value
    })
  }

  render() {
    const { type, title, required, choices } = this.props
    const { selectedValue } = this.state

    return (
      <div className={cx('grid grid__column', styles.item)}>
        <h4 className={cx('cell cell__12of12', styles.h4)}>
          {required &&
            <span
              className={styles.asterisk}
              data-tip="Required"
            >
              *&nbsp;
              <ReactTooltip />
            </span>
          }
          {title}
        </h4>
        <div className={styles.subj}>
          {(type === 'file' || type === 'input') &&
            <Input
              type={type}
            />
          }

          {type === 'paragraph' &&
            <TextArea
              rows="4"
            />
          }

          {type === 'checkbox' &&
            choices.map(item => (
              <label key={item.id}>
                <Input
                  type={type}
                />
                {item.value}
              </label>
            ))
          }

          {type === 'radio' &&
            <RadioGroup
              className={styles.subj}
              selectedValue={selectedValue}
              onChange={this.handleRadioChange}
            >
              {choices.map(item => (
                <label key={item.id}>
                  <Radio
                    value={item.id}
                  />
                  {item.value}
                </label>
              ))}
            </RadioGroup>
          }

          {type === 'select' &&
            <SelectElement
              options={choices}
            />
          }
        </div>
      </div>
    )
  }
}
