import React, { Component } from 'react';
import { connect } from 'react-redux';

import Steps from '../Common/Steps';

class Device extends Component {
  render() {
    // Getting device from router ["iphone", "ipad"]
    const { device } = this.props.match.params;

    // Getting title, model based URL param
    const { title, model } = this.props[device];

    return (
      <Steps list={model} title={title} />
    );
  }
}

const mapStateToProps = (state) => {
  // Getting Device from Redux
  return state.root.device
};

// Connecting Redux to the component
export default connect(mapStateToProps)(Device);