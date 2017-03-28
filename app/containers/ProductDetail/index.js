import React from 'react';
import Helmet from 'react-helmet';

import config from 'config';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Heading from 'components/Heading';
import ItemCounter from 'components/ItemCounter';
import SocialNav from 'components/SocialNav';
import LastView from 'components/LastView';

import WishlistHeart from 'components/WishlistHeart';

import { createStructuredSelector } from 'reselect';

import {
  makeSelectProduct,
  makeSelectError,
} from './selectors';

import {
  addLastViewedDesign,
  addToCart,
} from 'containers/App/actions';

import {
  loadProduct,
} from './actions';

class ProductDetail extends React.Component {

  static propTypes = {
    loadProduct: React.PropTypes.func,
    addLastViewedDesign: React.PropTypes.func,
    product: React.PropTypes.object,
    routeParams: React.PropTypes.object,
    redirectToCatalog: React.PropTypes.func,
    redirectToCart: React.PropTypes.func,
    addToCart: React.PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.sentLastViewed = false;
  }

  componentWillMount() {
    this.props.loadProduct(this.props.routeParams.productId);
  }

  componentDidMount() {
    this.viewedDesignsUpdate();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.routeParams.productId !== this.props.routeParams.productId) {
      this.sentLastViewed = false;
      this.props.loadProduct(nextProps.routeParams.productId);
    }
    if (nextProps.error) {
      this.props.redirectToCatalog();
    }
  }

  componentDidUpdate() {
    this.viewedDesignsUpdate();
  }

  addToCart() {
    const { product } = this.props;
    this.props.addToCart(product.uid, this.itemCounter.value());
    this.props.redirectToCart();
  }

  viewedDesignsUpdate() {
    if (this.props.product.name && !this.sentLastViewed) {
      this.props.addLastViewedDesign(this.props.product);
      this.sentLastViewed = true;
    }
  }

  openPopup(url) {
    window.open(url, 'popup', 'width=600,height=600,scrollbars=no,resizable=no');
  }

  render() {
    const { product } = this.props;
    const shareUrl = String(window.location);

    return (
      <div>
        {product.name &&
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
                      <img src={config.apiUrl + 'files/' + product.mainImage.fileIndex + '.jpg'} alt="img" className="img-fluid" />
                      <div className="ui-items">
                        <WishlistHeart uid={product.uid} />
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
                      <ItemCounter ref={(itemCounter) => { this.itemCounter = itemCounter; }} />
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
                          Size: {product.size.value}
                        </p>
                        <p>
                          Material: {product.material.name}
                        </p>
                        <p>
                          {product.material.composition}
                        </p>
                      </div>
                    </div>
                    <div className="col-12 product-detail__add-cart">
                      <div className="btn__inline">
                        <a onClick={(e) => this.addToCart(e)} className="btn btn-center">add to shopping basket</a>
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
    addLastViewedDesign: (design) => dispatch(addLastViewedDesign(design)),
    redirectToCatalog: () => dispatch(push('/catalog')),
    redirectToCart: () => dispatch(push('/basket')),
    addToCart: (item, qty) => dispatch(addToCart(item, qty)),
  };
}

const mapStateToProps = createStructuredSelector({
  product: makeSelectProduct(),
  error: makeSelectError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
