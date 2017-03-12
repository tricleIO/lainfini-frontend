import React from 'react';

import Heading from 'components/Heading';
import ItemCounter from 'components/ItemCounter';
import SocialNav from 'components/SocialNav';
import LastView from 'components/LastView';

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

    this.arrival1Img = require('./img/arrival-1.png');
  }

  render() {
    return (
      <div>
        <div className="product-detail">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <Heading type="h2" title="good taste: 5 from 8 already sold" line />
              </div>
              <div className="col-12 col-sm-5">
                <div className="detail-slider">
                  <div className="detail-slider__item">
                    <img src={this.arrival1Img} alt="img" className="img-fluid" />
                    <div className="ui-items">
                      <span className="like"><i className="icon icon-wishlist" /></span>
                      <span className="search"><i className="icon icon-user" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 push-sm-1">
                <div className="row">
                  <div className="col-12">
                    <div className="product-list__title text-center text-sm-left">
                      <h4>Blue moon</h4>
                      <span>$239.00</span>
                    </div>
                  </div>
                </div>
                <div className="row product-detail__iteractive">
                  <div className="col-12 col-md-7 col-xl-5 text-center text-sm-left">
                    <ItemCounter />
                  </div>
                  <div className="col-12 col-md-5 social-nav text-center text-sm-left">
                    <ul className="social-nav__icons">
                      <li><a href><i className="icon icon-facebook" /></a></li>
                      <li><a href><i className="icon icon-twitter" /></a></li>
                      <li><a href><i className="icon icon-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="row product-detail__table">
                  <div className="col-12">
                    <div className="wsw">
                      <p>
                        60x50 cm
                      </p>
                      <p>
                        23x23 inch.
                      </p>
                      <p>
                        printed fine silk
                      </p>
                    </div>
                  </div>
                  <div className="col-12 product-detail__add-cart">
                    <div className="btn__inline">
                      <a href="" className="btn btn-center">add to shopping basket</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <LastView />
        <SocialNav links />
      </div>
    );
  }
}