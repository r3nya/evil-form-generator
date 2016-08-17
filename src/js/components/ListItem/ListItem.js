import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Button, DeleteIcon, EditIcon } from 'components/uiToolkit'
import styles from './ListItem.css'

export const ListItem = props => {
  const { id, description, createdAt, onDeleteForm } = props

  return (
    <li className={styles.item}>
      <Link to={`/view/${id}`}>
        {id} – {description} ({createdAt})
      </Link>
      <Button
        to={`/edit/${id}`}
      >
        <EditIcon />
      </Button>
      <Button
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
