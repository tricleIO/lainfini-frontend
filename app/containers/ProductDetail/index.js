import React from 'react';
import Helmet from 'react-helmet';

import { connect } from 'react-redux';

import Heading from 'components/Heading';
import ItemCounter from 'components/ItemCounter';
import SocialNav from 'components/SocialNav';
import LastView from 'components/LastView';

import { createStructuredSelector } from 'reselect';

import { makeSelectProduct } from './selectors';

import {
  loadProduct,
} from './actions';

class ProductDetail extends React.Component {

  static propTypes = {
    loadProduct: React.PropTypes.func,
    product: React.PropTypes.object,
    routeParams: React.PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.arrival1Img = require('./img/arrival-1.png');
  }

  componentWillMount() {
    this.props.loadProduct(this.props.routeParams.productId);
  }

  openPopup(url) {
    window.open(url, 'popup', 'width=600,height=600,scrollbars=no,resizable=no');
  }

  render() {
    const { product } = this.props;
    const shareUrl = String(window.location);

    return (
      <div>
        {this.props.product &&
          <div className="product-detail">
            <Helmet title={product.name} />
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
                        <h4>{product.name}</h4>
                        <span>${product.price}</span>
                      </div>
                    </div>
                  </div>
                  <div className="row product-detail__iteractive">
                    <div className="col-12 col-md-7 col-xl-5 text-center text-sm-left">
                      <ItemCounter />
                    </div>
                    <div className="col-12 col-md-5 social-nav text-center text-sm-left">
                      <ul className="social-nav__icons">
                        <li>
                          <a href={'https://www.facebook.com/sharer/sharer.php?u=' + shareUrl} target="_blank" onClick={(e) => { e.preventDefault(); this.openPopup('https://www.facebook.com/sharer/sharer.php?u=' + shareUrl); }}>
                            <i className="icon icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href={'https://twitter.com/intent/tweet?text=' + product.name + '&url= ' + shareUrl + ' &via=TWITTER-HANDL'} target="_blank" onClick={(e) => { e.preventDefault(); this.openPopup('https://twitter.com/intent/tweet?text=' + product.name + '&url=' + shareUrl + ' &via=LainfiniFashion'); }}>
                            <i className="icon icon-twitter" />
                          </a>
                        </li>
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
          </div>}


        <LastView />
        <SocialNav links />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadProduct: (urlSlug) => dispatch(loadProduct(urlSlug)),
  };
}

const mapStateToProps = createStructuredSelector({
  product: makeSelectProduct(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
