import React from 'react';

import Heading from 'components/Heading';

import $ from 'jquery';
import 'slick-carousel';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default class CategoryCard extends React.PureComponent {

  static propTypes = {
    type: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.k1img = require('./img/K_1.png');
    this.k2img = require('./img/K_2.png');
    this.k3img = require('./img/K_3.png');
    this.k4img = require('./img/K_4.png');
    this.k5img = require('./img/K_5.png');
    this.k6img = require('./img/K_6.png');
  }

  componentDidMount() {
    this.slideShow = $(this.lookbookSlider).slick({
      arrows: true,
      lazyLoad: 'ondemand',
      autoplay: false,
      centerMode: true,
      centerPadding: '0',
      draggable: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
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

    $(this.lookbookSliderArrowLeft).click(() => {
      this.slideShow.slick('slickPrev', parseInt(this.slideShow.slick('slickCurrentSlide'), 10) - 1);
    });

    $(this.lookbookSliderArrowRight).click(() => {
      this.slideShow.slick('slickNext', parseInt(this.slideShow.slick('slickCurrentSlide'), 10) + 1);
    });
  }

  render() {
    return (
      <div className="lookbook" data-reveal>
        <div className="container">
          <div className="row">
            <div className="col-8 offset-2 text-center">
              <Heading subtitle={<FormattedMessage {...messages.smallTitle} />} title={<FormattedMessage {...messages.bigTitle} />} type={this.props.type} />
            </div>
            <div className="col-12 offset-vertical-40 lookbook__wrapper">
              <div className="lookbook__slider" ref={(c) => { this.lookbookSlider = c; }}>
                <div className="lookbook__slider__item">
                  <img src data-lazy={this.k1img} className="img-fluid" alt="lookbook" />
                </div>
                <div className="lookbook__slider__item">
                  <img src data-lazy={this.k2img} className="img-fluid" alt="lookbook" />
                </div>
                <div className="lookbook__slider__item">
                  <img src data-lazy={this.k3img} className="img-fluid" alt="lookbook" />
                </div>
                <div className="lookbook__slider__item">
                  <img src data-lazy={this.k4img} className="img-fluid" alt="lookbook" />
                </div>
                <div className="lookbook__slider__item">
                  <img src data-lazy={this.k5img} className="img-fluid" alt="lookbook" />
                </div>
                <div className="lookbook__slider__item">
                  <img src data-lazy={this.k6img} className="img-fluid" alt="lookbook" />
                </div>
              </div>
              <i className="icon icon-arrow-l lookbook__wrapper__arrow" ref={(c) => { this.lookbookSliderArrowLeft = c; }} />
              <i className="icon icon-arrow-r lookbook__wrapper__arrow" ref={(c) => { this.lookbookSliderArrowRight = c; }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}
