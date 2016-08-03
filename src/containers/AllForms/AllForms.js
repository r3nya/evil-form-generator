import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchForms } from 'actions';
import { formsSelector } from 'selectors';

const mapDispatchToProps = {
  fetchForms
};

@connect(formsSelector, mapDispatchToProps)
export default class AllForms extends Component {
  static propTypes = {
    fetchForms: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchForms } = this.props;
    // fetchForms();
  }

  render() {
    return (
      <div>AllForms</div>
    );
  }
}
