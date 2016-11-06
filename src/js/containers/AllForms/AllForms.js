import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  fetchForms,
  deleteForm
 } from 'actions'
import { formsSelector } from 'selectors'
import { ListItem } from 'components/ListItem'
import { ListGroup } from 'components/uiToolkit'
import cx from 'classnames'
import styles from './AllForms.css'

const { array, func } = PropTypes

@connect(formsSelector, { fetchForms, deleteForm })
export default class AllForms extends Component {
  static propTypes = {
    data: array,
    fetchForms: func.isRequired,
    deleteForm: func.isRequired,
  };

  componentDidMount() {
    const { fetchForms } = this.props
    fetchForms()
  }

  render() {
    const { data, deleteForm } = this.props

    return (
      <div className={cx('grid', styles.main)}>
        <ListGroup className="cell cell__12of12">
          {data && !!data.length &&
            data.map((item, key) => (
              <ListItem
                key={key}
                number={key}
                onDeleteForm={deleteForm}
                {...item}
              />
            ))
          }
        </ListGroup>

        {!data || !data.length &&
          <h4 className={styles.notYet}>
            No forms have been created…
          </h4>
        }
      </div>
    )
  }
}
