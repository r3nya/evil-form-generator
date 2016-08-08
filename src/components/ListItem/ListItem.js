import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export const ListItem = props => (
  <div>
    <Link to={`/view/${props.id}`}>
      {props.id} – {props.description}
    </Link>
  </div>
)

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string
}
