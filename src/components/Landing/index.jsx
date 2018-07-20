import React, { Component } from 'react';
import landing from './assets/landing.jpg';
import './style.css';

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <img src={landing} className="landing" alt="logo" />
      </div>
    );
  }
}

export default Landing;
