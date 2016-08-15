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

const mapDispatchToProps = {
  fetchForms,
  deleteForm
}

@connect(formsSelector, mapDispatchToProps)
export default class AllForms extends Component {
  static propTypes = {
    data: PropTypes.array,
    fetchForms: PropTypes.func.isRequired,
    deleteForm: PropTypes.func.isRequired,
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
                onDeleteForm={deleteForm}
                {...item}
              />
            ))
          }
        </ListGroup>
      </div>
    )
  }
}
