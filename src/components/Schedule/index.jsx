import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Month from '../Common/Calendar/month';
import Time from '../Common/Calendar/time';
import Header from '../Common/Header';
import { actions } from '../../redux/reducer'
import './style.css';
import cx from 'classnames';

const dateFormat = "MM/DD/YYYY";

class Schedule extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showErrors: false,
      info: {
        date: '',
        time: '',
        phone: '',
      }
    }
  }

  handleChangeMonth = date => this.setState({ info: {...this.state.info, date: date.format(dateFormat), time: ''} });

  handleChangeTime = time => this.setState({ info: {...this.state.info, time }});

  onChange = e => {
    const element = e.target.getAttribute("fixtype");
    const value = e.target.value;
    this.setState({info: {...this.state.info, [element]: value}})
  };

  onSubmit = (e) => {
    const { info } = this.state;
    const { date, time } = info;
    e.preventDefault();
    if (!date.length || !time.length) {
      this.setState({showErrors: true})
    } else {
      this.setState({showErrors: false});
      const payload = { ...this.props.info, ...info}
      this.props.confirmDetail(payload);
      this.props.saveToStorage(payload);
      this.props.history.push('/booking');
    }
    return false;
  };

  render() {
    const { showErrors, info: {date, time} } = this.state;
    let errors = [];
    if (showErrors) {
      if (!date.length) {
        errors.push('Please select a date')
      }
      if (!time.length) {
        errors.push('Please select a time')
      }

    }

    const timeClass = cx({
      'schedule-content': true,
      'hidden': this.state.info.date === '',

    });

    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="schedule-title">Let's Schedule Your Repair</div>
          <form className="schedule-body" onSubmit={this.onSubmit}>
            <div className="schedule-content">
              <h3>1. Pick a Day</h3>
              <Month onChange={this.handleChangeMonth} />
            </div>
            <div className={timeClass}>
              <h3>2. Pick a Time</h3>
              <Time onChange={this.handleChangeTime} selectedDate={this.state.info.date} selectedTime={this.state.info.time}/>
            </div>
            <div className="schedule-content address">
              <h3>Tell us where to send a technician:</h3>
              <input fixtype="address" required className="contact-input required" placeholder="Enter Your Location" onChange={this.onChange}/>
              <input fixtype="suite" className="contact-input" placeholder="Add / suite (optional)" onChange={this.onChange}/>
              <input fixtype="instructions" className="contact-input" placeholder="Add Instructions (optional)" onChange={this.onChange}/>
            </div>
            <div className="schedule-content address">
              <h3>How may we contact you?</h3>
              <input fixtype="name" required className="contact-input required" placeholder="Enter Your Full name" onChange={this.onChange}/>
              <input fixtype="email" required className="contact-input required" placeholder="Enter Your email" onChange={this.onChange}/>
              <input fixtype="phone" required className="contact-input required" type="number" placeholder="Enter Your phone number" onChange={this.onChange}/>
            </div>
            {
              errors.map(error=><div key={error} className="error">{error}</div>)
            }
            <button  className="confirm">Book Now</button>
          </form>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({root: {zipCodes, info}}) => ({zipCodes, info});
const mapDispatchToProps = (dispatch) => ({
  confirmDetail: (payload) => dispatch(actions.confirmDetail(payload)),
  saveToStorage: (payload) => dispatch(actions.saveToStorage(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
