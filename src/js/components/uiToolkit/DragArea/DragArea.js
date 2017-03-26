import React, { PropTypes } from 'react'
import { SortableHandle as sortableHandle } from 'react-sortable-hoc'
import cx from 'classnames'
import styles from './DragArea.css'

const { string } = PropTypes

export const DragArea = sortableHandle(({ className }) => (
  <div className={cx(className, styles.drag)}>
    <div className={styles.row}></div>
    <div className={styles.row}></div>
    <div className={styles.row}></div>
  </div>
))

DragArea.propTypes = {
  className: string
}
