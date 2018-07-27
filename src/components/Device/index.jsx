import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';
import './style.css';

class RepairPhone extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
        <div className="content-device">
          <Link to="/repair/iphone" className="box">Sub Category</Link>
          <Link to="/repair/ipad" className="box">Sub Category</Link>
        </div>
        </div>
      </Fragment>
    );
  }
}

export default RepairPhone;
