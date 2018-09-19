import React, { Component, Fragment } from 'react';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { actions } from '../../redux/reducer'
import './style.css';

class StepsProgress extends Component {

  constructor() {
    super();
    this.state = {
      zipCode: '',
    }
  }

  onBack = (e) => {

  }

  render() {
    return null;
    const { device, model, color, zipCode } = this.props.match.params;
    let issue = null;
    const { info } = this.props;
    if (info && info.issue) {
      issue = info.issue
    }

    return (
        <div className="progress-body">
          <div className="progress-box">
            <div className={classnames("check-progress")}/>
              <div className="progress-label">
                Device Model
              </div>
            <div className="progress-label">
              { device } { model } { color }
              </div>
          </div>
          <div className="progress-line" />
          <div className="progress-box">
            <div className="check-progress"/>
            <div className="progress-label">
              Issue
            </div>
            <div className="progress-label">
              { issue }
            </div>
          </div>
          <div className="progress-line" />
          <div className="progress-box">
            <div className="check-progress"/>
            <div className="progress-label">
              Schedule
            </div>
            <div className="progress-label">
              { issue }
            </div>
          </div>
        </div>
    );
  }
}

//const mapStateToProps = ({root: {zipCodes, info}, router}) => ({zipCodes, info, router});
const mapStateToProps = aa => aa;


const mapDispatchToProps = (dispatch) => ({
  saveToStorage: (payload) => dispatch(actions.saveToStorage(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(StepsProgress);
