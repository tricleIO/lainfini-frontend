import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import $ from 'jquery';
import 'slick-carousel';

export default class ArrivalsSlider extends React.PureComponent {

  static propTypes = {
    children: React.PropTypes.node,
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
    return (
      <div className="arrivals" data-reveal>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 arrivals__slider" ref={(c) => { this.arrivalsSlider = c; }}>
              <div className="arrivals__item text-center">
                <h2 className="arrivals__title"><FormattedMessage {...messages.featuredDesigns} /></h2>
                <p className="arrivals__subtitle">autumn mood</p>
                <img src={this.arrivalImg} className="img-fluid d-inline-block" alt="new arrival img" />
                <div className="arrivals__author">
                  <a href="" className="d-block">Design by Anna Krásná</a>
                  <div className="arrivals__icons">
                    <a href=""><i className="icon icon-wishlist" /><span>126</span></a>
                    <a href=""><i className="icon icon-user" /><span>73</span></a>
                  </div>
                </div>
                <a href="" className="arrivals__buy d-inline-block"><i className="icon icon-shop" /></a>
              </div>
              <div className="arrivals__item text-center">
                <h2 className="arrivals__title"><FormattedMessage {...messages.featuredDesigns} /></h2>
                <p className="arrivals__subtitle">autumn mood</p>
                <img src={this.arrivalImg} className="img-fluid d-inline-block" alt="new arrival img" />
                <div className="arrivals__author">
                  <a href="" className="d-block">Design by Anna Krásná</a>
                  <div className="arrivals__icons">
                    <a href=""><i className="icon icon-wishlist" /><span>126</span></a>
                    <a href=""><i className="icon icon-user" /><span>73</span></a>
                  </div>
                </div>
                <a href="" className="arrivals__buy d-inline-block"><i className="icon icon-shop" /></a>
              </div>
              <div className="arrivals__item text-center">
                <h2 className="arrivals__title"><FormattedMessage {...messages.featuredDesigns} /></h2>
                <p className="arrivals__subtitle">autumn mood</p>
                <img src={this.arrivalImg} className="img-fluid d-inline-block" alt="new arrival img" />
                <div className="arrivals__author">
                  <a href="" className="d-block">Design by Anna Krásná</a>
                  <div className="arrivals__icons">
                    <a href=""><i className="icon icon-wishlist" /><span>126</span></a>
                    <a href=""><i className="icon icon-user" /><span>73</span></a>
                  </div>
                </div>
                <a href="" className="arrivals__buy d-inline-block"><i className="icon icon-shop" /></a>
              </div>
              <div className="arrivals__item text-center">
                <h2 className="arrivals__title"><FormattedMessage {...messages.featuredDesigns} /></h2>
                <p className="arrivals__subtitle">autumn mood</p>
                <img src={this.arrivalImg} className="img-fluid d-inline-block" alt="new arrival img" />
                <div className="arrivals__author">
                  <a href="" className="d-block">Design by Anna Krásná</a>
                  <div className="arrivals__icons">
                    <a href=""><i className="icon icon-wishlist" /><span>126</span></a>
                    <a href=""><i className="icon icon-user" /><span>73</span></a>
                  </div>
                </div>
                <a href="" className="arrivals__buy d-inline-block"><i className="icon icon-shop" /></a>
              </div>
              <div className="arrivals__item text-center">
                <h2 className="arrivals__title"><FormattedMessage {...messages.featuredDesigns} /></h2>
                <p className="arrivals__subtitle">autumn mood</p>
                <img src={this.arrivalImg} className="img-fluid d-inline-block" alt="new arrival img" />
                <div className="arrivals__author">
                  <a href="" className="d-block">Design by Anna Krásná</a>
                  <div className="arrivals__icons">
                    <a href=""><i className="icon icon-wishlist" /><span>126</span></a>
                    <a href=""><i className="icon icon-user" /><span>73</span></a>
                  </div>
                </div>
                <a href="" className="arrivals__buy d-inline-block"><i className="icon icon-shop" /></a>
              </div>
              <div className="arrivals__item text-center">
                <h2 className="arrivals__title"><FormattedMessage {...messages.featuredDesigns} /></h2>
                <p className="arrivals__subtitle">autumn mood</p>
                <img src={this.arrivalImg} className="img-fluid d-inline-block" alt="new arrival img" />
                <div className="arrivals__author">
                  <a href="" className="d-block">Design by Anna Krásná</a>
                  <div className="arrivals__icons">
                    <a href=""><i className="icon icon-wishlist" /><span>126</span></a>
                    <a href=""><i className="icon icon-user" /><span>73</span></a>
                  </div>
                </div>
                <a href="" className="arrivals__buy d-inline-block"><i className="icon icon-shop" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
