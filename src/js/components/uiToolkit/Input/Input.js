import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import styles from './Input.css'

const { string } = PropTypes

export default class Input extends Component {
  static propTypes = {
    className: string,
    status: string,
  };

  componentDidMount() {
    this.input.focus()
  }

  inputRef = value => {
    this.input = value
  }

  render() {
    const { className, status, ...rest } = this.props
    const classes = cx(styles.input, className, {
      [styles.error]: status === 'error'
    })

    return (
      <input
        ref={this.inputRef}
        className={classes}
        autoCapitalize="off"
        autoCorrect="off"
        {...rest}
      />
    )
  }
}
