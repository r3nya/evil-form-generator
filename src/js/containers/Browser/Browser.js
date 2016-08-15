import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { fetchItem } from 'actions'
import { browserSelector } from 'selectors'
import { Loader } from 'components/uiToolkit'
import cx from 'classnames'

const mapDispatchToProps = {
  fetchItem
}

@connect(browserSelector, mapDispatchToProps)
export default class Browser extends Component {
  static propTypes = {
    // data: PropTypes.object,
    params: PropTypes.object,
    loading: PropTypes.bool,
    fetchItem: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchItem, params: { id } } = this.props
    fetchItem(id)
  }

  render() {
    const { loading, data: { createdAt, questions } } = this.props

    return (
      <div>
        <Loader show={loading} />

        <div>
          {createdAt}
        </div>


      </div>
    )
  }
}
