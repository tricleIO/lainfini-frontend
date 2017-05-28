import React from 'react';
import Helmet from 'react-helmet';

import className from 'classnames';
import config from 'config';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Drift from 'drift-zoom';

import Heading from 'components/Heading';
import ItemCounter from 'components/ItemCounter';
import SocialNav from 'components/SocialNav';
import LastView from 'components/LastView';

import size from 'lodash/size';

import { Link } from 'react-router';

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
    this.state = {
      drift: false,
      activePhotoIndex: 0,
    };
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
    if (this.productImg && !this.drift) {
      this.drift = new Drift(this.productImg, {
        paneContainer: this.productImgContainer,
        zoomFactor: 1.8,
      });
      this.drift.disable();
    }
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

  changeDriftState() {
    if (this.state.drift) {
      this.drift.disable();
    } else {
      this.drift.enable();
    }
    this.setState({
      drift: !this.state.drift,
    });
  }

  openPopup(url) {
    window.open(url, 'popup', 'width=600,height=600,scrollbars=no,resizable=no');
  }

  sliderUp() {
    this.setState({
      activePhotoIndex: this.state.activePhotoIndex < size(this.props.product.images) ? this.state.activePhotoIndex + 1 : 0,
    });
  }

  sliderDown() {
    this.setState({
      activePhotoIndex: this.state.activePhotoIndex > 0 ? this.state.activePhotoIndex - 1 : size(this.props.product.images),
    });
  }

  getActivePhoto() {
    let url;
    if (this.state.activePhotoIndex === 0) {
      url = this.props.product.mainImage && this.props.product.mainImage.fileIndex ? config.apiUrl + 'files/' + this.props.product.mainImage.fileIndex + '.jpg' : 'https://placehold.it/460x500';
    } else {
      url = config.apiUrl + 'files/' + this.props.product.images[this.state.activePhotoIndex - 1].fileIndex + '.jpg';
    }
    return url;
  }

  render() {
    const { product } = this.props;
    const shareUrl = String(window.location);

    const callToActionStrings = {
      HURRY_UP: (stock, made) => `Hurry up! Only ${made} pieces were made. Make your call today!`,
      GOOD_TASTE: (stock, made) => `Good Taste: ${made - stock} from ${made} already gone.`,
      CONCEPT: () => 'Interested in this one? Unfortunately it\'s just a concept.',
      SOLD_OUT: (stock, made) => `We are out of stock! Only ${made} pieces were made.`,
      // MAKE_YOUR_CALL: (stock, made) => ``,
    };

    return (
      <div>
        {product.name &&
          <div className="product-detail">
            <Helmet title={product.name} />
            <div className="container">
              <div className="row">
                {product.call &&
                  <div className="col-12 text-center">
                    <Heading type="h2" title={callToActionStrings[product.call.name](product.productStock, product.call.made)} line />
                  </div>
                }
                <div className="col-12 col-sm-5">
                  <div className="detail-slider">
                    <div className="detail-slider__controls">
                      <div className="up" onClick={() => this.sliderUp()}>
                        <a>
                          <svg width="0.741cm" height="1.552cm">
                            <path
                              fillRule="evenodd"
                              fill="rgb(102, 102, 102)"
                              d="M21.014,10.375 L20.316,11.066 L10.969,1.803 L10.969,44.000 L10.031,44.000 L10.031,1.806 L0.687,11.066 L-0.011,10.375 L10.031,0.424 L10.031,0.000 L10.969,0.000 L10.969,0.421 L21.014,10.375 Z"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="down" onClick={() => this.sliderDown()}>
                        <a>
                          <svg width="0.741cm" height="1.552cm">
                            <path
                              fillRule="evenodd"
                              fill="rgb(102, 102, 102)"
                              d="M21.014,33.625 L10.969,43.579 L10.969,44.000 L10.031,44.000 L10.031,43.576 L-0.011,33.625 L0.687,32.934 L10.031,42.193 L10.031,-0.000 L10.969,-0.000 L10.969,42.197 L20.316,32.934 L21.014,33.625 Z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className={className('detail-slider__item')}>
                      <div
                        ref={(c) => { this.productImgContainer = c; }}
                        style={{
                          cursor: this.state.drift ? 'zoom-in' : '',
                        }}
                      >
                        <img
                          ref={(c) => { this.productImg = c; }}
                          src={this.getActivePhoto()}
                          data-zoom={this.getActivePhoto()}
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      {/* <div className="ui-items">
                        <WishlistHeart uid={product.uid} />
                      </div>*/}
                    </div>
                    <div className="ui-items">
                      <a className="add_wishlist" onClick={() => this.changeDriftState()} style={{ cursor: 'pointer' }}>
                        <img src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/67-512.png" alt="zoom" style={{ maxHeight: '20px', marginRight: '20px' }} />
                      </a>
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
                    {product.productAvailability === 'IN_STOCK' &&
                      <div className="col-12 col-md-7 col-xl-5 text-center text-sm-left">
                        <ItemCounter max={product.productStock} ref={(itemCounter) => { this.itemCounter = itemCounter; }} />
                      </div>
                    }
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
                        {product.size &&
                          <p>Size: {product.size.value}</p>
                        }
                        {product.material &&
                          <p>Material: {product.material.name}</p>
                        }
                        {product.material &&
                          <p>{product.material.composition}</p>
                        }
                        {product.technology &&
                          <p>{product.technology.name}</p>
                        }
                        {product.design &&
                          <p>Designer: {product.design.name}</p>
                        }
                      </div>
                    </div>
                    <div className="col-12 product-detail__add-cart">
                      {product.productAvailability === 'IN_STOCK' &&
                        <div className="btn__inline">
                          <a onClick={(e) => this.addToCart(e)} className="btn btn-center">add to shopping basket</a>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row offset-vertical-30">
              <div className="ui-btn-double-type">
                <div className="col-12 col-sm-6 offset-sm-3 text-center">
                  <div className="btn__inline offset-vertical-30">
                    <Link to="/catalog" data-reveal>continue shopping</Link>
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
