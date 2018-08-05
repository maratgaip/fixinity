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
        <div className="container">
          <div className="schedule-title">Let's Schedule Your Repair</div>
          <div className="schedule-body" onSubmit={this.onSubmit}>
            {/*
              Booking Page Content
            */}
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
