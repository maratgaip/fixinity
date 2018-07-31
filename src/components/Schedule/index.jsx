import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Month from '../Common/Calendar/month';
import Time from '../Common/Calendar/time';
import moment from 'moment';

import Header from '../Common/Header';
import './style.css';

class NoSupport extends Component {

  constructor(props) {
    super(props);
    this.state = {
      moment: moment(),
    }
  }

  handleChange = m => {
    this.setState({ m });
  }

  handleSave = (a) => {
    console.log('save',a)
  }

  render() {
    // const { device, zipCode } = this.props.location.state;
    return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="schedule-title">Let's Schedule Your Repair</div>
        <div className="schedule-body">
          <div className="schedule-content">
            <h3>1. Pick a Day</h3>
            <Month
              moment={this.state.moment}
              onChange={this.handleChange}
              onSave={this.handleSave}
              minStep={30} // default
              hourStep={1} // default
            />
          </div>
          <div className="schedule-content">

          <h3>2. Pick a Time</h3>
          <Time
            moment={this.state.moment}
            onChange={this.handleChange}
            onSave={this.handleSave}
            minStep={30} // default
            hourStep={1} // default
          />
          </div>
          <div className="schedule-content address">
            <h3>Tell us where to send a technician:</h3>
            <input  className="contact-input" placeholder="Enter Your Location" onChange={this.onChange}/>
            <input  className="contact-input" placeholder="Add / suite (optional)" onChange={this.onChange}/>
            <input  className="contact-input" placeholder="Add Instructions (optional)" onChange={this.onChange}/>
          </div>
          <div className="schedule-content address">
            <h3>How may we contact you?</h3>
            <input  className="contact-input" placeholder="Enter Your Full name" onChange={this.onChange}/>
            <input  className="contact-input" placeholder="Enter Your email" onChange={this.onChange}/>
            <input  className="contact-input" type="number" placeholder="Enter Your phone number" onChange={this.onChange}/>
          </div>
          <button className="confirm">Confirm my details</button>
        </div>

      </div>
    </Fragment>
    );
  }
}

const mapStateToProps = ({root: {zipCodes}}) => ({zipCodes});

export default connect(mapStateToProps)(NoSupport);
