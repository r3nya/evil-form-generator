import React, { PropTypes } from 'react'
import styles from './SelectElement.css'

export const SelectElement = props => {
  const { options } = props
  return (
    <select className={styles.select}>
      {options && options.map((item, key) => (
        <option key={key}>{item}</option>
      ))}
    </select>
  )
}

SelectElement.propTypes = {
  options: PropTypes.array,
}
