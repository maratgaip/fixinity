import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Month from '../Common/Calendar/month';
import Time from '../Common/Calendar/time';
import Header from '../Common/Header';
import { actions } from '../../redux/reducer'
import './style.css';

class Booking extends Component {

  onBook = () => {
    const { bookAppointment, info } = this.props;
    bookAppointment(info)
  };

  render() {
    console.log('asdasdasd',this.props)
    return (
      <Fragment>
        <Header />
        <div className="container booking">
          <div className="schedule-body" onSubmit={this.onSubmit}>
            <div className="booking-device">
              <div className="booking-item">
                <div className="booking-title">Device</div>
                <div className="booking-content">iPhone 8 Plus, Space Gray</div>
              </div>
              <div className="booking-item">
                <div className="booking-title">Issue</div>
                <div className="booking-content">Broken Screen</div>
              </div>
              <div className="booking-item">
                <div className="booking-title">Cost</div>
                <div className="booking-content">$149</div>
              </div>
              <div className="booking-item">
                <div className="booking-title">Time</div>
                <div className="booking-content">Sunday, August 5, 9am - 10am</div>
              </div>
              <div className="booking-item">
                <div className="booking-title">Your info</div>
                <div className="booking-content">
                  <div>Marat Gaipov</div>
                  <div>95129</div>
                  <div>marattig@gmail.com</div>
                  <div>808 saratoga ave</div>
                </div>
              </div>
            </div>
            <div className="booking-helper">
              <h2>What is next?</h2>
              <ul>
                <li>We're selecting the best tech in your area and will confirm your appointment soon.
                </li>
                <li>
                  Once we assign a technician, we will provide the tech's name and arrival time by sm
                </li>
                <div>
                  <h2>Any questions or concerns?</h2>
                  <div>
                    <span>310 986 7703</span> or <a href="mail:support@fixinity.com">support@fixinity.com</a>
                  </div>
                </div>
              </ul>
            </div>
            <button onClick={this.onBook} className="confirm">Book Now</button>
          </div>

        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({root: {info}}) => ({info});
const mapDispatchToProps = (dispatch) => ({
  bookAppointment: (payload) => dispatch(actions.bookAppointment(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
