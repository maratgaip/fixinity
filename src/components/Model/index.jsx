import React, { Component } from 'react';
import { connect } from 'react-redux';

import Steps from '../Common/Steps';
import './style.css';

const title = "Select iPhone Model";
const iphoneModels = [
  { content: "8 Plus", url: "8-plus", id: "8-plus" },
  { content: "8", url: "8", id: "8" },
  { content: "7 Plus", url: "7-plus", id: "7-plus" },
  { content: "7", url: "7", id: "7" },
  { content: "6s Plus", url: "6s-plus", id: "6s-plus" },
  { content: "6s", url: "6s", id: "6s" },
  { content: "SE", url: "se", id: "se" },
  { content: "5s", url: "5s", id: "5s" },
]

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
