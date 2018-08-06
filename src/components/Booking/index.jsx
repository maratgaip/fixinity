import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Header from '../Common/Header';
import successImg from './assets/success.png';
import { actions } from '../../redux/reducer'
import './style.css';

class Booking extends Component {

  constructor (props) {
    super(props)
    this.state = {
      info: props.info,
      sendAppointment: props.sendAppointment,
    }
  }

  componentWillMount () {
    const { info: { color, device, issue, model, zipCode } } = this.props;
    const infoFromStorage = localStorage.getItem('info');
    if (!(color.length && device.length && issue.length && model.length && zipCode.length)) {
      this.setState({info: JSON.parse(infoFromStorage)})
      this.props.saveToStorage(JSON.parse(infoFromStorage)); // sync from local storage to redux
    }
  }

  onBook = () => {
    const { info } = this.state;
    const { bookAppointment } = this.props;
    bookAppointment(info)
  };

  getTime = () => {
    const  { time, date } = this.state.info;
    const formattedDate = moment(date, 'MMMM Do').format('MMMM Do');
    return `${formattedDate}, ${time}`
  };

  getPrice = () => {
    const { issue, model, device: deviceType } = this.state.info;
    const { device } = this.props;
    const issueId = issue.toLocaleLowerCase().split(' ').join('-'); // do it in redux
    return `$${device[deviceType].price[model].issues[issueId]}`
  };

  render() {
    const { address, color, device, email, instructions, issue, model, name, zipCode, phone } = this.state.info;
    let bookedContent = (
      <div className="booked-content">
        <button onClick={this.onBook} className="confirm">Book Now</button>
      </div>
    );

    if (this.state.sendAppointment) {
      bookedContent = (
        <div className="booked-content">
          <span>Successfully Booked</span>
          <img src={successImg} className="booked-success" />
        </div>
      )
    }
    const instructionsContent = instructions && !instructions.length ? <div>{instructions}</div> : null;
console.log('sendAppointment',this.props.sendAppointment)
    return (
      <Fragment>
        <Header />
        <div className="container booking">
          <div className="schedule-body">
            {bookedContent}
          <div className="booking-body">
            <div className="booking-device">
              <div className="booking-item">
                <div className="booking-title">Device</div>
                <div className="booking-content">
                  {`${device} ${model}, ${color}`}
                </div>
              </div>
              <div className="booking-item">
                <div className="booking-title">Issue</div>
                <div className="booking-content">{issue}</div>
              </div>
              <div className="booking-item">
                <div className="booking-title">Cost</div>
                <div className="booking-content">{this.getPrice()}</div>
              </div>
              <div className="booking-item">
                <div className="booking-title">Time</div>
                {/*<div className="booking-content">Sunday, August 5, 9am - 10am</div>*/}
                <div className="booking-content">{this.getTime()}</div>
              </div>
              <div className="booking-item">
                <div className="booking-title">Your info</div>
                <div className="booking-content">
                  <div>{name}</div>
                  <div>{phone}</div>
                  <div>{email}</div>
                  <div>{address}</div>
                  <div>{zipCode}</div>
                  { instructionsContent }
                </div>
              </div>
            </div>
            <div className="booking-helper">
              <h3>What is next?</h3>
              <ul className="what-next">
                <li>We're selecting the best tech in your area and will confirm your appointment soon.
                </li>
                <li>
                  Once we assign a technician, we will provide the tech's name and arrival time by sm
                </li>
                <div>
                  <h4>Any questions or concerns?</h4>
                  <div className="contact-info">
                    <span>310 986 7703</span> or <a href="mail:support@fixinity.com">support@fixinity.com</a>
                  </div>
                </div>
              </ul>
            </div>
            </div>
            {bookedContent}
          </div>

        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({root: {info, device, sendAppointment}}) => {
  console.log('sendAppointment-container',sendAppointment)
  return {info, device, sendAppointment}
};
const mapDispatchToProps = (dispatch) => ({
  bookAppointment: (payload) => dispatch(actions.bookAppointment(payload)),
  saveToStorage: (info) => dispatch(actions.saveToStorage(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
