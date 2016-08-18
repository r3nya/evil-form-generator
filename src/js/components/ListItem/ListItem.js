import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Button, DeleteIcon, EditIcon } from 'components/uiToolkit'
import cx from 'classnames'
import styles from './ListItem.css'

export const ListItem = props => {
  const { id, description, createdAt, onDeleteForm } = props

  return (
    <li className={styles.item}>
      <Link
        className={cx('cell cell__8of12 cell__sm__10of12', styles.link)}
        to={`/view/${id}`}
      >
        {id} – {description} ({createdAt})
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
        style="outline"
        onClick={() => onDeleteForm(id)}
      >
        <DeleteIcon />
      </Button>
    </li>
  )
}

ListItem.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  createdAt: PropTypes.string,
  onDeleteForm: PropTypes.func.isRequired,
}
