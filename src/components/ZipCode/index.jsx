import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Header from '../Common/Header';
import './style.css';

class ZipCode extends Component {
  render() {
    // Getting device from router ["iphone", "ipad"]
    const { device, model } = this.props.match.params;

    // Getting color, model based URL param
    const { color } = this.props[device];

    return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="steps-title">Enter Your Zip Code</div>
        <div className="steps-body">
        </div>
      </div>
    </Fragment>
    );
  }
}

const mapStateToProps = ({root: {device}}) => device;

export default connect(mapStateToProps)(ZipCode);
