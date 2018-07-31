import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './assets/logo3.png';
import './style.css';

class Landing extends Component {
  render() {
    return (
      <div className="header-component">
        <div className="container">
          <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
        </div>

      </div>
    );
  }
}

export default Landing;
