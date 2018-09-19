import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import cx from 'classnames';
import range from 'lodash/range';
import chunk from 'lodash/chunk';

const Day = ({ i, d, selectedDay, disabled, ...props }) => {
  const select = selectedDay && selectedDay.date();
  const cls = cx({
    'current-day': i === d,
    'selected': i === select,
    'disabled': disabled,
  });
  return <td className={cls} {...props}>{i}</td>;
};

class Calendar extends Component {

  constructor(props){
    super(props);
    this.state = {
      selected: null,
    }
  }

  selectDate = (i) => {
    const m = moment().utc().local();
    m.date(i);
    this.setState({selected: m})
    this.props.onChange(m);
    ReactGA.event({
      category: 'Booking',
      action: 'Select Date',
      label: m.format()
    })
  };

  getWeeks = () => {
    const today = moment().utc().local();
    // Count of days to from today to last sunday
    const todayDay = today.day();

    const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const before = weeks.slice(0,todayDay);
    const after = weeks.slice(todayDay);
    return after.concat(before);
  };

  getDays = () => {
    const today = moment().utc().local();

    const todayDate = today.date();
    const lastDayOfCurrentMonth = today.clone().endOf('month').date();
    // How many days we want to show
    const daysToShow = 7;

    let days = [];
    if ((todayDate + daysToShow) < lastDayOfCurrentMonth) {
      days = [].concat(
        range(todayDate, todayDate + daysToShow),
      );
    }
    return days
  };

  render() {
    const weeks = this.getWeeks();
    const days = this.getDays();
    const today = moment().utc().local();

    const { notAvailableWeekDays } = this.props;

    return (
      <div className={cx('m-calendar')}>
        <table>
          <thead>
          <tr>
            {weeks.map((w, i) => <td key={i}>{w}</td>)}
          </tr>
          </thead>

          <tbody>
          {chunk(days, 7).map((row, w) =>
            <tr key={w}>
              {row.map((i,indexWeek) => {
                const disabledDay = notAvailableWeekDays.includes(weeks[indexWeek]);
                return (
                  <Day
                    key={i}
                    i={i}
                    d={today}
                    disabled={disabledDay}
                    selectedDay={this.state.selected}
                    w={w}
                    onClick={() => {
                      if (!disabledDay) {
                        this.selectDate(i, w)
                      }
                    }}
                  />
                )
              }
              )}
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

// Getting Router from Redux
const mapStateToProps = state => ({notAvailableWeekDays: state.root.notAvailableWeekDays});

// Connecting Redux to the component
export default connect(mapStateToProps)(Calendar);
