import React from 'react';

import { Link } from 'react-router';

import config from 'config';

import _ from 'lodash';

import WishlistHeart from 'components/WishlistHeart';

import $ from 'jquery';
import 'slick-carousel';

class ArrivalsSlider extends React.PureComponent {

  static propTypes = {
    products: React.PropTypes.object,
  };

  componentDidMount() {
    $(this.arrivalsSlider).slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      infinite: true,
      speed: 800,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          },
        },
      ],
    });
  }

  render() {
    const { products } = this.props;
    products.items = _(products.items).sortBy('position').value();

    return (
      <div className="arrivals" data-reveal>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1">
              <h2 className="arrivals__title">{products.name}</h2>
            </div>
            <div className="col-12 col-sm-10 offset-sm-1 arrivals__slider" ref={(c) => { this.arrivalsSlider = c; }}>
              {products.items.map((product, index) => (
                <div className="arrivals__item text-center" key={index}>
                  <p className="arrivals__subtitle">
                    <Link to={'/catalog/' + product.product.slug}>
                      {product.product.name}
                    </Link>
                  </p>
                  <Link to={'/catalog/' + product.product.slug}>
                    <img src={config.apiUrl + 'files/' + product.product.mainImageDTO.fileIndex + '.png'} className="img-fluid d-inline-block" alt="new arrival img" />
                  </Link>
                  <div className="arrivals__author">
                    <div className="row">
                      <div className="col-2">
                        <WishlistHeart uid={product.product.uid} />
                      </div>
                      <div className="col-8">
                        <a className="text">{product.product.material.name} {product.product.material.composition} / {product.product.size.value}</a>
                      </div>
                      <div className="col-2">
                        <Link to={'/catalog/' + product.product.slug}><i className="icon icon-shop"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ArrivalsSlider;
