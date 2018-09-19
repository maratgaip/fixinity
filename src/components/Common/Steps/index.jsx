import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Header';
import ProgressBar from '../../ProgressBar';
import './style.css';

class RepairPhone extends Component {

  onClick = (payload) => {
    if (this.props.onClick){
      this.props.onClick(payload)
    }
  }

  render() {

    const { list, title, pathname } = this.props;

    // Creating repeated content based on passed data
    const stepsContent = list.map(({ content, url, id, price }) =>  {

      // Creating a new link (currentUrl + nextStep)
      const link = `${pathname}/${url}`;
      let priceContent = null;
      let stepClass = "box";
      if (price) {
        priceContent = (
          <div className="price-label">${price}</div>
        )
        stepClass = "box price-box"
      }
      return <Link to={link} key={id} onClick={() => this.onClick(content)} className={stepClass}>
        { priceContent }
        { content }
        </Link>
    });

    return (
      <Fragment>
        <Header />
        <div className="container">
          <ProgressBar {...this.props} />
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
