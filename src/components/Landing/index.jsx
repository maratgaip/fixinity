import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Iframe from 'react-iframe'

import logo from './assets/logo3.png';
import './style.css';

class Landing extends Component {
  render() {
    return (
      <Iframe url="/landing/index.html"
              width="100%"
              height="100vh"
              allowFullScreen/>
    );
  }
}

export default Landing;


{/*
<div className="landing">
  <div className="header">
    <div className="container">
      <div className="top">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>Home</li>
          <li>Become an iTech</li>
          <li>Repair</li>
          <li>Blog</li>
          <li>Locations</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="slogan">
        <div>Need your iPhone fixed?</div>
        <div>We will come to you!</div>
      </div>
      <Link to="/repair/iphone" className="repair-phone">Book Now</Link>
      <div className="sub-slogan">Quality service.   Good price.   7 days a week.</div>
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
</div>*/}
