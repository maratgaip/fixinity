import moment from 'moment';
import React, { Component } from 'react';
import cx from 'classnames';
import range from 'lodash/range';
import chunk from 'lodash/chunk';

const Day = ({ i, w, d, className, selectedDay, ...props }) => {
  const prevMonth = w === 0 && i > 7;
  const nextMonth = w >= 4 && i <= 14;
  const cls = cx({
    'prev-month': prevMonth,
    'next-month': nextMonth,
    'current-day': i === d,
    'selected': i === selectedDay.date(),
  });

  return <td className={cls} {...props}>{i}</td>;
};

export default class Calendar extends Component {

  constructor(props){
    super(props);
    this.state = {
      selected: moment().utc(),
    }
  }
  selectDate = (i, w) => {
    const prevMonth = w === 0 && i > 7;
    const nextMonth = w >= 4 && i <= 14;
    const m = this.props.moment;

    if (prevMonth) m.subtract(1, 'month');
    if (nextMonth) m.add(1, 'month');

    m.date(i);

    if ( !prevMonth ) {
      this.setState({selected: m})
      // this.props.onChange(m);
    }

  };

  render() {
    const today = moment().utc();

    // Count of days to from today to last sunday
    const todayDay = today.day();

    const todayDate = today.date();
    const lastDayOfCurrentMonth = today.clone().endOf('month').date();

    const currentMonth = range(todayDate, lastDayOfCurrentMonth + 1);

    // How many days we want to show
    const daysToShow = 14;

    const days = [].concat(
      range(todayDate - todayDay, lastDayOfCurrentMonth + 1),
      range(1, daysToShow - currentMonth.length + todayDay)
    );
    const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
      <div className={cx('m-calendar', this.props.className)}>
        <table>
          <thead>
          <tr>
            {weeks.map((w, i) => <td key={i}>{w}</td>)}
          </tr>
          </thead>

          <tbody>
          {chunk(days, 7).map((row, w) =>
            <tr key={w}>
              {row.map(i =>
                <Day
                  key={i}
                  i={i}
                  d={today}
                  selectedDay={this.state.selected}
                  w={w}
                  onClick={() => this.selectDate(i, w)}
                />
              )}
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}