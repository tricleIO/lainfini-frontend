import React from 'react';

import $ from 'jquery';
import 'slick-carousel';

import config from 'config';

export default class ProductSlider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    imgs: React.PropTypes.array,
  };

  componentDidMount() {
    const slick = $(this.productListSlider).slick({
      dots: true,
      arrows: false,
      fade: true,
      cssEase: 'ease',
      speed: 600,
      infinite: true,
    });

    slick.find('.slick-dots').prepend("<i class='icon icon-arrow-r'></i>");
    slick.find('.slick-dots .icon-arrow-r').click(function click() {
      $(this).parents('.product-list__slider').slick('slickNext', parseInt($(this).parents('.product-list__slider').slick('slickCurrentSlide'), 10));
    });
  }

  render() {
    return (
      <div className="product-list__slider" ref={(c) => { this.productListSlider = c; }}>
        { this.props.imgs.map((img, index) => (
          <img src={config.apiUrl + 'files/' + img.fileIndex + '.jpg'} key={index} alt="" />
          ))
        }
      </div>
    );
  }

}
