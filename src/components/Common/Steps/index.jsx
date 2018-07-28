import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Header';
import './style.css';

class RepairPhone extends Component {
  render() {

    const { list, title, pathname } = this.props;

    // Creating repeated content based on passed data
    const stepsContent = list.map(({ content, url }) =>  {

      // Creating a new link (currentUrl + nextStep)
      const link = `${pathname}/${url}`;

      return <Link to={link} key={url} className="box">{ content }</Link>
    });

    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="steps-title">{title}</div>
          <div className="steps-body">
            { stepsContent }
          </div>
        </div>
      </Fragment>
    );
  }
}

// Getting Router from Redux
const mapStateToProps = state => state.router.location;

// Connecting Redux to the component
export default connect(mapStateToProps)(RepairPhone);
