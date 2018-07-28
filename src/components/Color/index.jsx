import React, { Component } from 'react';
import { connect } from 'react-redux';

import Steps from '../Common/Steps';

class Issue extends Component {
  render() {
    // Getting device from router ["iphone", "ipad"]
    const { device } = this.props.match.params;

    // Getting title, data based URL param
    const { title, data } = this.props[device].issue;

    return (
      <Steps list={data} title={title} />
    );
  }
}

const mapStateToProps = state => state.root.device;

// Connecting Redux to the component
export default connect(mapStateToProps)(Issue);