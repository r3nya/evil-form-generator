import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchForms } from 'actions';
import { formsSelector } from 'selectors';
import { ListItem } from 'components/ListItem';

const mapDispatchToProps = {
  fetchForms
};

@connect(formsSelector, mapDispatchToProps)
export default class AllForms extends Component {
  static propTypes = {
    data: PropTypes.array,
    fetchForms: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchForms } = this.props;
    fetchForms();
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        {data.length &&
          data.map((item, id) => (
            <ListItem
              key={id}
              {...item}
            />
          ))
        }
      </div>
    );
  }
}
