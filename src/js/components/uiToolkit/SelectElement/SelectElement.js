import React, { PropTypes } from 'react'
import cx from 'classnames'
import styles from './SelectElement.css'

const { array, string } = PropTypes

export const SelectElement = props => {
  const { options, className } = props
  const classes = cx(styles.select, className)

  return (
    <select className={classes}>
      {options && options.map(item => (
        <option key={item.id}>{item.value}</option>
      ))}
    </select>
  )
}

SelectElement.propTypes = {
  options: array,
  className: string,
}
