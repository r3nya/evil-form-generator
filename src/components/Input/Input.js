import React, { Component, PropTypes } from 'react'

export default class Input extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  render() {
    const { className, ...rest } = this.props

    return (
      <input
        className={className}
        ref={input => this.value = input && input.value}
        {...rest}
      />
    )
  }
}
