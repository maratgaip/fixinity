import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import iphone from './assets/iphone.png';
import ipad from './assets/ipad.png';

import Header from '../Common/Header';
import './style.css';

class RepairPhone extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
        <div className="content-repair">
          <Link to="/repair/iphone" className="box-device">
            <h3>iPhone</h3>
            <img src={iphone} height="200px"/>
          </Link>
          <Link to="/repair/ipad" className="box-device">
            <h3>iPad</h3>
            <img src={ipad} height="200px"/>
          </Link>
        </div>
        </div>
      </Fragment>
    );
  }
}

export default RepairPhone;
