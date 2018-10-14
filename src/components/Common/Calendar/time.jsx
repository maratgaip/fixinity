import moment from 'moment';
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import cx from 'classnames';

const Time = ({ i, selectedTime, selectedDate, ...props }) => {
  const cls = cx({
    'hours': true,
    'selected': i === selectedTime,
    'disabled': !isBookable(selectedDate, i),
  });

  return <div className={cls} {...props}>{i}</div>;
};

const isBookable = (selectedDate, slotTime) => {
  if(selectedDate === '') {
    return false;
  }
  var slotDT = moment(selectedDate + " " + slotTime, "MM/DD/YYYY hh:mmA"); // Sat Sep 01 2018 23:00:00 GMT-0700
  const eveningHours = [
    "5:00pm",
    "6:00pm",
    "7:00pm",
    "8:00pm",
    "9:00pm",
  ];

  const ifMonday = moment(slotDT).format('dddd') === 'Monday';
  if (ifMonday && eveningHours.includes(slotTime)) {
    return false;
  }

  //moment(moment(), "DD-MM-YYYY").add('days', 1)
  // console.log('asdadsad', );
  const nextDay = moment(moment(), "DD/MM/YYYY").add('days', 1).format('MM/DD/YYYY');
  const currentTime = moment().format('HH');
  const noBookingMorningHours = ["9:00am", "10:00am", "11:00am", "12:00pm"];

  // if current time is 9pm and customer wants book for the next day then
  // disable 9am to 12:00pm
  if (currentTime >= 21 && nextDay === selectedDate && noBookingMorningHours.includes(slotTime)) {
    return false

  }
  // if today is after 9pm then disable tomorrows morning hours

  var diff = slotDT.diff(moment());
  var minFromNowToTimeSlot = moment.duration(diff).asMinutes();


  const ifToday =moment().isSame(moment(selectedDate), 'd');

  return ifToday ? minFromNowToTimeSlot > 150 : true; // only bookable if time is > 2.5 hours in the future
};

const times = [
  "9:00am",
  "10:00am",
  "11:00am",
  "12:00pm",
  "1:00pm",
  "2:00pm",
  "3:00pm",
  "4:00pm",
  "5:00pm",
  "6:00pm",
  "7:00pm",
  "8:00pm",
  "9:00pm",
  "10:00pm",
  "11:00pm",
];

export default class Calendar extends Component {

  selectTime = (time) => {
    if(!isBookable(this.props.selectedDate, time)) {
      return;
    }
    this.props.onChange(time);
    ReactGA.event({
      category: 'Booking',
      action: 'Select Time',
      label: time
    })
  };

  render() {
    return (
      <div className={cx('m-time', this.props.className)}>
        <div className="time">
          {times.map(i =>
            <Time
              key={i}
              i={i}
              selectedTime={this.props.selectedTime}
              selectedDate={this.props.selectedDate}
              onClick={() => this.selectTime(i)}
            />
          )}
        </div>
      </div>
    );
  }
}