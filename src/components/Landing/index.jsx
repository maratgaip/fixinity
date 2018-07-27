import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from './assets/logo3.png';
import './style.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="header">
          <div className="container">
            <div className="top">
              <img src={logo} className="logo" />
              <ul>
                <li>Home</li>
                <li>Become an iTech</li>
                <li>Repair</li>
                <li>Blog</li>
                <li>Locations</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="slogan">We'll repair your iPhone, iPad for cheap & <br/> give lifetime warranty</div>
            <Link to="repair-phone" className="repair-phone">repair my phone</Link>
          </div>
        </div>
        <div className="container">
          <h2 className="title">Easy way to get your phone repaired</h2>
        <div className="content">
          <div className="box">
            <div className="step">STEP 1</div>
            If your device breaks, don't panic. We offer a huge range of mobile phone & tablet repair services.
          </div>
          <div className="box">
            <div className="step">STEP 2</div>
            We'll come to you whenever & wherever.
          </div>
          <div className="box">
            <div className="step">STEP 3</div>
            Our trained technicians will repair your mobile phone or tablet device quickly & efficiently.
          </div>
        </div>
        </div>
        <div className="mid_banner">
          <div className="container">
            <div className="mid_box">
              <div className="mid_title">NO FIX, NO FEE</div>
              <div className="mid_content">Repair on Demand</div>
            </div>
            <div className="mid_box">
              <div className="mid_title">LIFE TIME WARRANTY</div>
              <div className="mid_content">Guaranteed Service</div>
            </div>
            <div className="mid_box">
              <div className="mid_title">EXPERT STAFF</div>
              <div className="mid_content">Available Anytime</div>
            </div>
            <div className="mid_box">
              <div className="mid_title">FAST & CHEAP</div>
              <div className="mid_content">Qualified Workers</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
