import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Header from '../Common/Header';
import successImg from './assets/success.png';
import loaderImg from './assets/loader.svg';
import { actions } from '../../redux/reducer'
import './style.css';

class Booking extends Component {

  constructor (props) {
    super(props)
    this.state = {
      info: props.info,
      sendAppointment: false,
      error: '',
    }
  }

  componentWillMount () {
    const { info: { color, device, issue, model, zipCode } } = this.props;
    const infoFromStorage = JSON.parse(localStorage.getItem('info'));
    if (!(color.length && device.length && issue.length && model.length && zipCode.length)) {
      if (infoFromStorage) {
        this.setState({info: infoFromStorage})
        this.props.saveToStorage(infoFromStorage); // sync from local storage to redux
      } else {
        // no data in localStorage return to main page
        this.props.history.push('/')
      }
    }
  }

  componentDidMount () {
    this.onBook();
    window.scrollTo( 0, 0 );
  }

  onBook = () => {
    const { device, model, color, issue } = this.props.match.params;
    const currentDevice = this.props.device[device];
    const issueContent = this.getNameFromId(issue, currentDevice.issue.data);
    const modelContent = this.getNameFromId(model, currentDevice.model);
    const colorContent = this.getNameFromId(color, currentDevice.color[model]);
    const priceContent = currentDevice.price[model].issues[issue];
    const deviceContent = device === 'iphone' ? 'iPhone' : '';

    const { appliedCoupon } = this.props;
    let instructions = this.state.info.instructions;
    if (appliedCoupon){
      instructions += `$${appliedCoupon} coupon applied`;
    }

    const info = {
      ...this.state.info,
      price: priceContent - appliedCoupon,
      issue: issueContent,
      device: deviceContent,
      model:modelContent,
      color: colorContent || ' ',
      instructions
    };
    const { bookAppointment } = this.props;
    new Promise(function(resolve, reject) {
      bookAppointment(info, resolve, reject)
    }).then(() => {
      this.setState({sendAppointment: true});
      localStorage.removeItem('info')
    }).catch((error) => {
      this.setState({error});
    })
  };

  getTime = () => {
    const  { time, date } = this.state.info;
    const formattedDate = moment(date).format('MMMM DD');
    return `${formattedDate}, ${time}`
  };

  getNameFromId = (id, nameObject) => {
    for (let i = 0; i < nameObject.length; i++) {
      if (nameObject[i].id === id){
        return nameObject[i].content
      }
    }
  };

  render() {
    const { address, email, instructions, name, phone } = this.state.info;
    const { device, model, color, issue } = this.props.match.params;
    const { appliedCoupon } = this.props;

    const currentDevice = this.props.device[device];
    const issueContent = this.getNameFromId(issue, currentDevice.issue.data);
    const modelContent = this.getNameFromId(model, currentDevice.model);
    const colorContent = this.getNameFromId(color, currentDevice.color[model]) || '';
    const priceContent = currentDevice.price[model].issues[issue];
    const deviceContent = device === 'iphone' ? 'iPhone' : '';


    let bookedContent = (
      <div className="booked-content">
        <img src={loaderImg} width={40} height={40}/>
      </div>
    );

    if (this.state.sendAppointment) {
      bookedContent = (
        <div className="booked-content">
          <div className="booked-content-success">
            <span>Successfully Booked</span>
            <img src={successImg} alt="booking" className="booked-success" />
          </div>
          <div className="booked-content-contact">We will contact you soon via message</div>
        </div>
      )
    }

    if (this.state.error.length) {
      bookedContent = (
        <div className="booked-content">
          <div className="booked-content-success">
            <span>Error Occured</span>
          </div>
          <div className="booked-content-contact">{this.state.error}</div>
        </div>
      )
    }

    const couponPriceContent = !appliedCoupon ? `${priceContent}` : (
      <Fragment>
        <span className="coupon-price-prev">${priceContent}</span> ${priceContent - appliedCoupon}
      </Fragment>
    )

    const instructionsContent = instructions && !instructions.length ? <div>{instructions}</div> : null;
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
                  {`${deviceContent} ${modelContent} ${colorContent}`}
                </div>
              </div>
              <div className="booking-item">
                <div className="booking-title">Issue</div>
                <div className="booking-content">{issueContent}</div>
              </div>
              <div className="booking-item">
                <div className="booking-title">Cost</div>
                <div className="booking-content">${couponPriceContent}</div>
              </div>
              <div className="booking-item">
                <div className="booking-title">Time</div>
                {/*<div className="booking-content">Sunday, August 5, 9am - 10am</div>*/}
                <div className="booking-content">{this.getTime()}</div>
              </div>
              <div className="booking-item">
                <div className="booking-title">Address</div>
                <div className="booking-content">{address}</div>
              </div>
              <div className="booking-item">
                <div className="booking-title">Your info</div>
                <div className="booking-content">
                  <div>{name}</div>
                  <div>{phone}</div>
                  <div>{email}</div>
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
                  Once we assign a technician, we will provide the tech's name and arrival time by sms
                </li>
                <div>
                  <h4>Any questions or concerns?</h4>
                  <div className="contact-info">
                    <span>415 943 3888</span> or <a href="mail:support@fixinity.com">support@fixinity.com</a>
                  </div>
                </div>
              </ul>
            </div>
            </div>
          </div>

        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({root: {info, device, sendAppointment, appliedCoupon}}) => ({info, appliedCoupon, device, sendAppointment});
const mapDispatchToProps = (dispatch) => ({
  bookAppointment: (payload, resolve, reject) => dispatch(actions.bookAppointment(payload, resolve, reject)),
  saveToStorage: (info) => dispatch(actions.saveToStorage(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
