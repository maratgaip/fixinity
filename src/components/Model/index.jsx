import React, { Component } from 'react';
import { connect } from 'react-redux';

import Steps from '../Common/Steps';
import './style.css';

class Model extends Component {
  render() {
    // Getting device from router ["iphone", "ipad"]
    const { device, model } = this.props.match.params;

    // Getting color, model based URL param
    const { color } = this.props[device];

    return (
      <Steps list={color[model]} title={color.title} />
    );
  }
}

const mapStateToProps = ({root: {device}}) => device;

export default connect(mapStateToProps)(Model);
