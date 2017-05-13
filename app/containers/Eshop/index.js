import React from 'react';
import Helmet from 'react-helmet';

import classNames from 'classnames';

import Visual from 'components/Visual';
import Peoples from 'components/Peoples';
import SocialNav from 'components/SocialNav';
import LastView from 'components/LastView';

import ProductSlider from './productSlider';

import Select from 'components/Select';

import WishlistHeart from 'components/WishlistHeart';

import config from 'config';

import _ from 'lodash';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectProducts,
  makeSelectFilter,
} from './selectors';

import {
  addToCart,
} from 'containers/App/actions';

import {
  loadProducts,
  selectFilterMaterial,
  selectFilterSize,
} from './actions';

import { Link } from 'react-router';

class Eshop extends React.Component {

  static propTypes = {
    loadProducts: React.PropTypes.func,
    products: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object,
    ]),
    filterSize: React.PropTypes.number,
    filterMaterial: React.PropTypes.number,
    selectFilterMaterial: React.PropTypes.func,
    selectFilterSize: React.PropTypes.func,
    addToCart: React.PropTypes.func,
    location: React.PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.eshopProduktBigImg = require('./img/eshop-produkt-big.png');
    this.eshopProduktExampleImg = require('./img/eshop-product-example.jpg');
    this.eshopSmallSecondImg = require('./img/eshop-small-second.png');
    this.eshopHeadImg = require('./img/eshop-bg.png');
  }

  componentWillMount() {
    this.props.loadProducts();
  }

  addToBasket(uid) {
    this.props.addToCart(uid);
  }

  render() {
    const sizes = _(this.props.products).isArray() ? _(this.props.products).map('size').uniqBy('uid').filter((obj) => _(obj).isObject()).value() : [];
    const materials = _(this.props.products).isArray() ? _(this.props.products).map((obj) => obj.material).uniqBy('uid').filter((obj) => _(obj).isObject()).value() : [];

    let products = _(this.props.products).isArray() ? this.props.products : [];

    if (parseInt(this.props.filterSize, 10) !== -1) {
      products = _(products).filter((obj) => obj.size && obj.size.uid === parseInt(this.props.filterSize, 10)).value();
    }

    if (parseInt(this.props.filterMaterial, 10) !== -1) {
      products = _(products).filter((obj) => obj.material && obj.material.uid === parseInt(this.props.filterMaterial, 10)).value();
    }

    products = _(products).orderBy('productAvailability').value();

    return (
      <div>
        <Helmet title="Catalog" />
        <Visual bg={this.eshopHeadImg} mod="visual--small" />

        {
          this.props.location && this.props.location.state && this.props.location.state.successfulPayment &&
          <div className="successful-payment">
            Your payment has been successful. You will be informed through the email.
          </div>
        }

        <div className="filter">
          <div className="container">
            <div className="row text-center">
              <div className="col-12 col-sm-10 offset-sm-1">
                <div className="filter__heading">
                  <h1 className="filter__title">original handmade scarves</h1>
                  {<div className="row">
                    <div className="col-12 col-md-6">
                      <div className="ui-interactive">
                        <Select className="ui-interactive__select" value={this.props.filterSize} onChange={(event, value) => { this.props.selectFilterSize(value); }}>
                          <option value="-1">- All sizes -</option>
                          {
                            sizes.map((size) =>
                              <option value={size.uid} key={size.uid}>{size.value}</option>
                            )
                          }
                        </Select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="ui-interactive">
                        <Select className="ui-interactive__select" value={this.props.filterMaterial} onChange={(event, value) => { this.props.selectFilterMaterial(value); }}>
                          <option value="-1">- All materials -</option>
                          {
                            materials.map((material) =>
                              <option value={material.uid} key={material.uid}>{material.name}</option>
                            )
                          }
                        </Select>
                      </div>
                    </div>
                  </div>}
                </div>
                <div className="col-3 mb-3">
                  <hr className="hr-blue" />
                </div>
              </div>
              <div className="col-12 col-sm-4" />
              <div className="col-12 col-sm-4" />
              <div className="col-12 col-sm-4" />
            </div>
          </div>
        </div>

        <div className="product-list">
          <div className="container-fluid">
            <div className="row">
              {products.map((product, index) => (
                <div
                  className={classNames('col-12 col-md-6 col-lg-5 product-list__item', {
                    'product-list__item--top-left': index % 4 === 1,
                    'product-list__item--top-right': index % 4 === 2,
                    'product-list__item--bottom-left': index % 4 === 3,
                  })} key={product.uid}
                >
                  <div className="product-list__bg">
                    <ProductSlider imgs={product.images} />
                    <img src={product.mainImage && product.mainImage.fileIndex ? config.apiUrl + 'files/' + product.mainImage.fileIndex + '.jpg' : 'https://placehold.it/460x500'} className="product-list__small-image" alt={product.name} />
                  </div>
                  <div className="product-list__content">
                    <div className="product-list__title">
                      <Link to={'/catalog/' + product.slug}>
                        <h4>{product.name}</h4>
                      </Link>
                      <span>${product.price}</span>
                    </div>
                    <div className="product-list__action">
                      <Link to={'/catalog/' + product.slug} className="see__detail">See detail <i className="icon icon-see-detail"></i></Link>
                      <WishlistHeart uid={product.uid} />
                    </div>
                    <div className="row product-list__info">
                      <div className="col-7">
                        {product.size &&
                          <div>{product.size.value}</div>
                        }
                        {product.material &&
                          <div>{product.material.name}, {product.material.composition}</div>
                        }
                        {product.technology &&
                          <div>{product.technology.name}</div>
                        }
                        {product.design &&
                          <div>{product.design.name}</div>
                        }
                      </div>
                      <div className="col-5 see_more">
                        {product.productAvailability === 'IN_STOCK' && <Link to={'/basket'} onClick={() => this.addToBasket(product.uid)} className="btn">Add to Basket</Link>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <LastView />
        <Peoples btnInline isShop />
        <SocialNav links />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: (page) => dispatch(loadProducts(page)),
    selectFilterMaterial: (uid) => dispatch(selectFilterMaterial(uid)),
    selectFilterSize: (uid) => dispatch(selectFilterSize(uid)),
    addToCart: (uid, qty) => dispatch(addToCart(uid, qty)),
  };
}

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
  filterSize: makeSelectFilter('Size'),
  filterMaterial: makeSelectFilter('Material'),
});

export default connect(mapStateToProps, mapDispatchToProps)(Eshop);
