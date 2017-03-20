import React from 'react';
import Helmet from 'react-helmet';

import classNames from 'classnames';

import Visual from 'components/Visual';
import Peoples from 'components/Peoples';
import SocialNav from 'components/SocialNav';
import LastView from 'components/LastView';

import ProductSlider from './productSlider';

import config from 'config';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectProducts } from './selectors';

import {
  loadProducts,
} from './actions';

import { Link } from 'react-router';

class Eshop extends React.Component {

  static propTypes = {
    loadProducts: React.PropTypes.func,
    products: React.PropTypes.array,
  };

  constructor(props) {
    super(props);

    this.eshopProduktBigImg = require('./img/eshop-produkt-big.png');
    this.eshopProduktExampleImg = require('./img/eshop-product-example.jpg');
    this.eshopSmallSecondImg = require('./img/eshop-small-second.png');
  }

  componentWillMount() {
    this.props.loadProducts();
  }

  render() {
    return (
      <div>
        <Helmet title="Catalog" />
        <Visual bg="//placehold.it/1920x260" mod="visual--small" />

        <div className="filter">
          <div className="container">
            <div className="row text-center">
              <div className="col-10 offset-1">
                <div className="filter__heading">
                  <h1 className="filter__title">original handmade scarves</h1>
                  <span className="filter__subtitle">Filter by</span>
                </div>
              </div>
              <div className="col-12 col-sm-4" />
              <div className="col-12 col-sm-4" />
              <div className="col-12 col-sm-4" />
            </div>
          </div>
        </div>

        <div className="product-list">
          <div className="container">
            <div className="row">
              { this.props.products.map((product, index) => (
                <div
                  className={classNames('col-12 col-sm-6 product-list__item', {
                    'product-list__item--top-left': index % 4 === 1,
                    'product-list__item--top-right': index % 4 === 2,
                    'product-list__item--bottom-left': index % 4 === 3,
                  })} key={product.uid}
                >
                  <div className="product-list__bg">
                    <ProductSlider imgs={product.images} />
                    <Link to={'/catalog/' + product.urlSlug}><img src={config.apiUrl + 'files/' + product.mainImage.fileIndex + '.jpg'} className="product-list__small-image" alt={product.name} /></Link>
                  </div>
                  <div className="product-list__content">
                    <div className="product-list__title">
                      <h4><Link to={'/catalog/' + product.urlSlug}>{product.name}</Link></h4>
                      <span>${product.price}</span>
                    </div>
                    <div className="row product-list__info">
                      <div className="col-7">size</div>
                      <div className="col-4">{product.size.value}</div>
                    </div>
                    <div className="row product-list__info">
                      <div className="col-7">material</div>
                      <div className="col-4">{product.material.name} <br /> {product.material.composition}</div>
                    </div>
                    <div className="row product-list__info">
                      <div className="col-7">design</div>
                      <div className="col-4">Jabob Borrows</div>
                    </div>
                    <div className="row product-list__action">
                      <div className="col-6">
                        <i className="icon icon-wishlist" />
                        <span>Add to wishlist</span>
                      </div>
                      <div className="col-6">
                        <Link to={'/catalog/' + product.urlSlug} className="btn">See detail</Link>
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
  };
}

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Eshop);
