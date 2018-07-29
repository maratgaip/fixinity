import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Header from '../Common/Header';
import './style.css';

class NoSupport extends Component {

  render() {
    const { device, zipCode } = this.props.location.state;
    return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="no-support-title">No Support Yet</div>
        <div className="no-support-body">
            <h2>Sorry, we do not currently service {device} devices in {zipCode}</h2>
        </div>
      </div>
    </Fragment>
    );
  }
}

const mapStateToProps = ({root: {zipCodes}}) => ({zipCodes});

export default connect(mapStateToProps)(NoSupport);
