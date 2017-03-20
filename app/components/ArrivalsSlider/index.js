import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Link } from 'react-router';

import config from 'config';

import $ from 'jquery';
import 'slick-carousel';

export default class ArrivalsSlider extends React.PureComponent {

  static propTypes = {
    products: React.PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.arrivalImg = require('./img/arrival-1.png');
  }

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
    return (
      <div className="arrivals" data-reveal>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 arrivals__slider" ref={(c) => { this.arrivalsSlider = c; }}>
              { products.items.map((product, index) => (
                <div className="arrivals__item text-center" key={index}>
                  <h2 className="arrivals__title"><FormattedMessage {...messages.featuredDesigns} /></h2>
                  <p className="arrivals__subtitle">{products.name}</p>
                  <img src={config.apiUrl + 'files/' + product.product.mainImage.fileIndex + '.png'} className="img-fluid d-inline-block" alt="new arrival img" />
                  <div className="arrivals__author">
                    <a href=""><i className="icon icon-wishlist"></i></a>
                    <a className="text">{product.product.material.name} {product.product.material.composition} / {product.product.size.value}</a>
                    <Link to="/eshop/detail/1"><i className="icon icon-shop"></i></Link>
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
