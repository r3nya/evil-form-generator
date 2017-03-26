import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Button, DeleteIcon, EditIcon } from 'components/uiToolkit'
import cx from 'classnames'
import styles from './ListItem.css'

const { number, string, func } = PropTypes

export const ListItem = props => {
  const { id, number, description, createdAt, onDeleteForm } = props

  return (
    <li className={styles.item}>
      <Link
        role="link"
        className={cx('cell cell__8of12 cell__sm__10of12', styles.link)}
        to={`/view/${id}`}
      >
        {number + 1} – {description} ({createdAt})
      </Link>
      <Button
        button
        className="cell"
        style="outline"
        to={`/edit/${id}`}
      >
        <EditIcon />
      </Button>
      <Button
        className="cell"
        style="delete"
        onClick={() => onDeleteForm(id)}
      >
        <DeleteIcon />
      </Button>
    </li>
  )
}

ListItem.propTypes = {
  id: number,
  number,
  description: string,
  createdAt: string,
  onDeleteForm: func.isRequired,
}
