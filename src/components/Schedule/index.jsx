import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Month from '../Common/Calendar/month';
import Time from '../Common/Calendar/time';
import Header from '../Common/Header';
import { actions } from '../../redux/reducer'
import './style.css';

const dateFormat = "MM/DD/YYYY";

class NoSupport extends Component {

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

  handleChangeMonth = date => this.setState({ info: {...this.state.info, date: date.format(dateFormat)} });

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
      const { color, device, model, zipcode} = this.props.match.params;
      const payload = {
        ...info,
        color,
        device,
        model,
        zipcode,
      };
      this.setState({showErrors: false});
      this.props.submitAppointment(payload)
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
            <div className="schedule-content">

              <h3>2. Pick a Time</h3>
              <Time onChange={this.handleChangeTime}/>
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
            <button  className="confirm">Confirm my details</button>
          </form>

        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({root: {zipCodes}}) => ({zipCodes});
const mapDispatchToProps = (dispatch) => ({
  submitAppointment: (payload) => dispatch(actions.submitAppointment(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(NoSupport);
