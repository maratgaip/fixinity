import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Header from '../Common/Header';
import SearchIcon from './assets/search.svg';
import { actions } from '../../redux/reducer'
import './style.css';

class ZipCode extends Component {

  constructor() {
    super();
    this.state = {
      zipCode: '',
    }
  }
  componentDidMount() {
  }

  onSubmit = () => {
    const { zipCode } = this.state;
    const { zipCodes, info, match: { params: { device, model, color } } } = this.props;
    if (!zipCode.length) {
      return false
    }
    if (!zipCodes.includes(Number(zipCode))) {
      this.props.history.push({
        pathname: '/no-support',
        state: { device: `${device} ${model}`, zipCode }
      })
    } else {
      const selectedData = {...info, model, device, color, zipCode};
      this.props.saveToStorage(selectedData);
      const url = `zip-code/${zipCode}/schedule`;
      this.props.history.push(url)
    }
  }

  onChange = e => this.setState({zipCode: e.target.value});

  render() {
    return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="steps-title">Enter Your Zip Code</div>
        <div className="zip-code-body">
          <div className="zip-code">
            <input className="zip-code-input" type="number" placeholder="Enter your ZIP code" onChange={this.onChange} value={this.state.zipCode} />
            <button className="zip-code-button" onClick={this.onSubmit}>
              <img src={SearchIcon} alt="search" />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
    );
  }
}

const mapStateToProps = ({root: {zipCodes, info}}) => ({zipCodes, info});


const mapDispatchToProps = (dispatch) => ({
  saveToStorage: (payload) => dispatch(actions.saveToStorage(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ZipCode);
