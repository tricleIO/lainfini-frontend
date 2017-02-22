import React from 'react';

import $ from 'jquery';
import 'slick-carousel';

export default class ProductSlider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    img: React.PropTypes.string,
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
        <img src={this.props.img} alt="" />
        <img src={this.props.img} alt="" />
        <img src={this.props.img} alt="" />
      </div>
    );
  }

}
