import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './ListItem.css'

export const ListItem = props => {
  const { id, description, createdAt } = props

  return (
    <li className={styles.item}>
      <Link to={`/view/${id}`}>
        {id} – {description} ({createdAt})
      </Link>
    </li>
  )
}

ListItem.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  createdAt: PropTypes.string
}
