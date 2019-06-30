import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import iphone from './assets/iphone.png';
import ipad from './assets/ipad.png';

import Header from '../Common/Header';
import './style.css';

class RepairCar extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
        <div className="content-repair">
          <Link to="/repair/bmw" className="box-device">
            <h3>BWM</h3>
          </Link>
          <Link to="/repair/mercedes" className="box-device">
            <h3>Mercedes</h3>
          </Link>
        </div>
        </div>
      </Fragment>
    );
  }
}

export default RepairCar;
