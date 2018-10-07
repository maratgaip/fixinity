import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Header';
import ProgressBar from '../../ProgressBar';
import './style.css';

class RepairPhone extends Component {

  constructor(){
    super();
    this.state = {
      coupon: 0,
    }
  }

  onClick = (payload) => {
    const { onClick, applyCoupon } = this.props;
    const { coupon } = this.state;
    if (onClick){
      onClick(payload)
    }
    if (coupon){
      applyCoupon(coupon)
    }
  }

  couponOnChange = ({target: {value}}) => {
    if (value === 'YELP10'){
      this.setState({coupon:10})
    } else if (value === 'YELP15'){
      this.setState({coupon:15})
    } else if (value === 'YELP05'){
      this.setState({coupon:5})
    }else {
      this.setState({coupon:0})
    }
  }

  render() {

    const { list, title, pathname } = this.props;
    let couponContent = null;

    // Creating repeated content based on passed data
    const stepsContent = list.map(({ content, url, id, price }) =>  {

      // Creating a new link (currentUrl + nextStep)
      const link = `${pathname}/${url}`;
      let priceContent = null;
      let stepClass = "box";
      if (price) {
        priceContent = (
          <div className="price-label">${price}</div>
        );

        const { coupon } = this.state;

        if (coupon) {
          priceContent = (
            <Fragment>
              <div className="price-label with-coupon">
                <div className="price-label-prev">${price}</div>
                ${price - coupon}
                </div>
            </Fragment>
          );
        }

        stepClass = "box price-box"

        couponContent = (
          <div className="coupon-content">
            <a target="_blank" href="https://www.yelp.com/biz/fixinity-burlingame-3">
                <img src="/img/yelp_fullcolor.png"/><br/>
                Check in on Yelp to get a $5 discount!
            </a>
          </div>
        )

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
          {couponContent}
        </div>
      </Fragment>
    );
  }
}

// Getting Router from Redux
const mapStateToProps = state => state.router.location;

// Connecting Redux to the component
export default connect(mapStateToProps)(RepairPhone);
