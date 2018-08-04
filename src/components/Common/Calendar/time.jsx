import moment from 'moment';
import React, { Component } from 'react';
import cx from 'classnames';

const Time = ({ i, className, selectedDay, ...props }) => {
  const cls = cx({
    'hours': true,
    'selected': i === selectedDay,
  });

  return <div className={cls} {...props}>{i}</div>;
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

  constructor(props){
    super(props);
    this.state = {
      selected: moment().utc(),
    }
  }
  selectDate = (time) => {
    this.setState({selected: time});
    this.props.onChange(time);
  };

  render() {

    return (
      <div className={cx('m-time', this.props.className)}>
        <div className="time">
          {times.map(i =>
            <Time
              key={i}
              i={i}
              selectedDay={this.state.selected}
              onClick={() => this.selectDate(i)}
            />
              )}
        </div>
      </div>
    );
  }
}