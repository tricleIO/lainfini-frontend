import React from 'react';

import Heading from 'components/Heading';

import $ from 'jquery';
import 'slick-carousel';

export default class CategoryCard extends React.PureComponent {

  static propTypes = {
    type: React.PropTypes.string,
  };

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
              <Heading subtitle="la infini lookbook 2016" title="lets get inspired" type={this.props.type} />
            </div>
            <div className="col-12 offset-vertical-40 lookbook__wrapper">
              <div className="lookbook__slider" ref={(c) => { this.lookbookSlider = c; }}>
                <div className="lookbook__slider__item">
                  <img src data-lazy="http://loremflickr.com/480/380?random=1" className="img-fluid" alt="lookbook" />
                </div>
                <div className="lookbook__slider__item">
                  <img src data-lazy="http://loremflickr.com/480/380?random=2" className="img-fluid" alt="lookbook" />
                </div>
                <div className="lookbook__slider__item">
                  <img src data-lazy="http://loremflickr.com/480/380?random=3" className="img-fluid" alt="lookbook" />
                </div>
                <div className="lookbook__slider__item">
                  <img src data-lazy="http://loremflickr.com/480/380?random=4" className="img-fluid" alt="lookbook" />
                </div>
                <div className="lookbook__slider__item">
                  <img src data-lazy="http://loremflickr.com/480/380?random=5" className="img-fluid" alt="lookbook" />
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
