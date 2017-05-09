import React from 'react';
import config from 'config';

import orderBy from 'lodash/orderBy';

import Heading from 'components/Heading';

import $ from 'jquery';
import 'slick-carousel';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default class CategoryCard extends React.PureComponent {

  static propTypes = {
    type: React.PropTypes.string,
    files: React.PropTypes.array.isRequired,
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
              <Heading subtitle={<FormattedMessage {...messages.smallTitle} />} title={<FormattedMessage {...messages.bigTitle} />} type={this.props.type} />
            </div>
            <div className="col-12 offset-vertical-40 lookbook__wrapper">
              <div className="lookbook__slider" ref={(c) => { this.lookbookSlider = c; }}>
                {orderBy(this.props.files, 'sequenceNumber').map((file) =>
                  <div className="lookbook__slider__item">
                    <img data-lazy={config.apiUrl + 'files/' + file.fileIndex + '.jpg?width=500&height=500'} className="img-fluid" alt="lookbook" />
                  </div>
                )}
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
