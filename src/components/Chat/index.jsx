import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../Common/Header';
import './style.css';

class Chat extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {

  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">

          Chat Application

        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({root}) => ({root});

export default connect(mapStateToProps)(Chat);
