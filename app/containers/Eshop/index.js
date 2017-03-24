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
    this.eshopHeadImg = require('./img/eshop-bg.png');
  }

  componentWillMount() {
    this.props.loadProducts();
  }

  render() {
    return (
      <div>
        <Helmet title="Catalog" />
        <Visual bg={this.eshopHeadImg} mod="visual--small" />

        <div className="filter">
          <div className="container">
            <div className="row text-center">
              <div className="col-10 offset-1">
                <div className="filter__heading">
                  <h1 className="filter__title">original handmade scarves</h1>
                  <span className="filter__subtitle">Filter by</span>
                  <div className="row">
                    <div className="col-6">
                      <div className="ui-interactive">
                        <select className="ui-interactive__select">
                          <option>- All sizes -</option>
                          <option>20 x 20’’ / 40 x 40 cm</option>
                          <option>Volba 2</option>
                          <option>Volba 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="ui-interactive">
                        <select className="ui-interactive__select">
                          <option>- All sizes -</option>
                          <option>20 x 20’’ / 40 x 40 cm</option>
                          <option>Volba 2</option>
                          <option>Volba 3</option>
                        </select>
                      </div>
                    </div>
                  </div>
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
              {this.props.products.map((product, index) => (
                <div
                  className={classNames('col-12 col-sm-6 product-list__item', {
                    'product-list__item--top-left': index % 4 === 1,
                    'product-list__item--top-right': index % 4 === 2,
                    'product-list__item--bottom-left': index % 4 === 3,
                  })} key={product.uid}
                >
                  <div className="product-list__bg">
                    <ProductSlider imgs={product.images} />
                    <img src={config.apiUrl + 'files/' + product.mainImage.fileIndex + '.jpg'} className="product-list__small-image" alt={product.name} />
                  </div>
                  <div className="product-list__content">
                    <div className="product-list__title">
                      <Link to={'/catalog/' + product.urlSlug}>
                        <h4>{product.name}</h4>
                      </Link>
                      <span>${product.price}</span>
                    </div>
                    <div className="product-list__action">
                      <Link to={'/catalog/' + product.urlSlug} className="see__detail">See detail <i className="icon icon-shop"></i></Link>
                      <a className="add_wishlist"><i className="icon icon-wishlist"></i></a>
                    </div>
                    <div className="row product-list__info">
                      <div className="col-7">
                        <div>{product.size.value}</div>
                        <div>{product.material.name}, {product.material.composition}</div>
                        <div>Jabob Borrows</div>
                      </div>
                      <div className="col-5 see_more">
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
        <div className="cookies">
          <div className="container">
            <div className="row">
              <div className="col-11">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam asperiores cupiditate debitis!</p>
              </div>
              <div className="col-1">
                <i className="icon icon-close"></i>
              </div>
            </div>
          </div>
        </div>
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
