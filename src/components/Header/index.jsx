import React, { Component } from 'react';

import logo from './assets/logo3.png';
import './style.css';

class Landing extends Component {
  render() {
    return (
      <div className="header-component">
        <div className="container">
          <img src={logo} className="logo" />
        </div>

      </div>
    );
  }
}

export default Landing;
