import React from 'react';
import config from 'config';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import _ from 'lodash';

import {
  makeSelectWishlist,
} from 'containers/App/selectors';

import SocialNav from 'components/SocialNav';

class Wishlist extends React.Component {

  static propTypes = {
    products: React.PropTypes.array,
  };

  render() {
    const products = _(this.props.products).isArray ? this.props.products : [];

    return (
      <div className="wishlist">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <div className="heading  heading--mod-bottom" data-reveal>
                <div className="heading__subtitle" />
                <h3 className="heading__title">your wishlist</h3>
              </div>
            </div>
          </div>
          <div className="row wishlist-product-list text-center animated fadeInUp">
            {products && products.map((p, index) =>
              <div className="col-12 col-sm-6 col-lg-6 col-xl-3" key={index}>
                <div className="wish-product">
                  <div className="wish-product__background">
                    <Link to={'/catalog/' + p.product.slug}>
                      <img className="img-fluid" src={config.apiUrl + 'files/' + p.product.mainImage.fileIndex + '.jpg'} alt="product img" />
                    </Link>
                  </div>
                  <div className="wish-product__content">
                    <div className="wish-product__title">
                      <h4>{p.product.name}</h4>
                      <Link to={'/catalog/' + p.product.slug}>
                        <i className="icon icon-shop" />
                      </Link>
                    </div>
                    <div className="wish-product__price">
                      <span>${p.product.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <SocialNav links />
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  products: makeSelectWishlist(),
});

export default connect(mapStateToProps)(Wishlist);
