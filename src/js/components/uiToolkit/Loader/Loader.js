import React, { Component, PropTypes } from 'react'
import styles from './Loader.css'

const { bool } = PropTypes

export default class Loader extends Component {
  static propTypes = {
    show: bool
  }

  handleClick = event => {
    event.stopPropagation()
  }

  render() {
    const { show } = this.props

    return show && (
      <div className={styles.container} onClick={this.handleClick}>
        <div className="loader">Loading…</div>
      </div>
    )
  }
}
