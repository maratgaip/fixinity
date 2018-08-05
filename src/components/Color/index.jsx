import React, { Component } from 'react';
import { connect } from 'react-redux';

import Steps from '../Common/Steps';
import { actions } from '../../redux/reducer';

class Issue extends Component {

  onClick = (content) => {
    this.props.updateIssue(content)
  };

  render() {
    // Getting device from router ["iphone", "ipad"]
    const { device } = this.props.match.params;

    // Getting title, data based URL param
    const { title, data } = this.props[device].issue;
    return (
      <Steps onClick={this.onClick} list={data} title={title} />
    );
  }
}

const mapStateToProps = state => state.root.device;

const mapDispatchToProps = (dispatch) => ({
  updateIssue: (zipCode) => dispatch(actions.updateIssue(zipCode))
})

export default connect(mapStateToProps, mapDispatchToProps)(Issue);