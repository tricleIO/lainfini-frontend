import React from 'react';

import SocialNav from 'components/SocialNav';
import LastView from 'components/LastView';

import { Link } from 'react-router';

class Basket extends React.Component {

  render() {
    return (
      <main id="page">
        <div className="basket">
          <div className="product-list">
            <div className="container">
              <div className="row">
                <div className="col-12 product-list__item">
                  <div className="product-list__item--flex">
                    <div className="product-list__bg col-12 col-sm-2">
                      <img src="../../userfiles/arrival-1.png" alt="basket product" />
                    </div>
                    <div className="product-list__content col-12 col-sm-10">
                      <div className="product-list__title col-12 col-sm-4">
                        <h4>Blue moon</h4>
                        <div className="item-counter">
                          <i className="minus">-</i>
                          <span className="status">1</span>
                          <i className="plus">+</i>
                        </div>
                      </div>
                      <div className="product-list__info col-12 col-sm-4">
                        60x50 cm <br />
                        50x30cm <br />
                        printed fine silk
                      </div>
                      <div className="product-list__price col-12 col-sm-3">
                        <span>$239.00</span>
                      </div>
                      <div className="product-list__action col-12 col-sm-1">
                        <i className="icon icon-close" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 product-list__item">
                  <div className="product-list__item--flex">
                    <div className="product-list__bg col-12 col-sm-2">
                      <img src="../../userfiles/arrival-1.png" alt="basket product" />
                    </div>
                    <div className="product-list__content col-12 col-sm-10">
                      <div className="product-list__title col-12 col-sm-4">
                        <h4>Blue moon</h4>
                        <div className="item-counter">
                          <i className="minus">-</i>
                          <span className="status">1</span>
                          <i className="plus">+</i>
                        </div>
                      </div>
                      <div className="product-list__info col-12 col-sm-4">
                        60x50 cm <br />
                        50x30cm <br />
                        printed fine silk
                      </div>
                      <div className="product-list__price col-12 col-sm-3">
                        <span>$239.00</span>
                      </div>
                      <div className="product-list__action col-12 col-sm-1">
                        <i className="icon icon-close" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 product-list__item">
                  <div className="product-list__item--flex">
                    <div className="product-list__bg col-12 col-sm-2">
                      <img src="../../userfiles/arrival-1.png" alt="basket product" />
                    </div>
                    <div className="product-list__content col-12 col-sm-10">
                      <div className="product-list__title col-12 col-sm-4">
                        <h4>Blue moon</h4>
                        <div className="item-counter">
                          <i className="minus">-</i>
                          <span className="status">1</span>
                          <i className="plus">+</i>
                        </div>
                      </div>
                      <div className="product-list__info col-12 col-sm-4">
                        60x50 cm <br />
                        50x30cm <br />
                        printed fine silk
                      </div>
                      <div className="product-list__price col-12 col-sm-3">
                        <span>$239.00</span>
                      </div>
                      <div className="product-list__action col-12 col-sm-1">
                        <i className="icon icon-close" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-5 offset-sm-6">
                  <div className="ui-total-price">
                    <div className="title">
                      subtotal
                    </div>
                    <div className="price">
                      $439.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="ui-btn-double-type">
                  <div className="col-12 col-sm-4 offset-sm-2">
                    <div className="btn__inline offset-vertical-30">
                      <Link to="/catalog" data-reveal>continue shopping</Link>
                    </div>
                  </div>
                  <div className="col-12 col-sm-5">
                    <div className="btn__inline offset-vertical-30">
                      <a href="" className="btn" data-reveal>check out your basket</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LastView />
        <SocialNav links />
      </main>
    );
  }

}

export default Basket;
