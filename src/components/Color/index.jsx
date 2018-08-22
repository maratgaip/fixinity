import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';

import Steps from '../Common/Steps';
import { actions } from '../../redux/reducer';


class Issue extends Component {

  onClick = (content) => {

    this.props.updateIssue(content)
    ReactGA.event({
      category: 'Booking',
      action: 'Select Issue',
      label: content
    })
  };

  render() {
    // Getting device from router ["iphone", "ipad"]
    const { device } = this.props.match.params;

    // Getting title, data based URL param
    const { title, data } = this.props[device].issue;
    const price = this.props.iphone.price;
    const newData = [];
    const pricesForIssues = price[this.props.match.params.model].issues;
    data.forEach(item => {
      if (pricesForIssues[item.id]) {
        const newObj = {...item, price: pricesForIssues[item.id]}
        newData.push(newObj)
      }
    });
    return (
      <Steps price={price} onClick={this.onClick} list={newData} title={title} />
    );
  }
}

const mapStateToProps = state => state.root.device;

const mapDispatchToProps = (dispatch) => ({
  updateIssue: (zipCode) => dispatch(actions.updateIssue(zipCode))
})

export default connect(mapStateToProps, mapDispatchToProps)(Issue);