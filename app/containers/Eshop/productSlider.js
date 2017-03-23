import React from 'react';

import _ from 'lodash';

import 'slick-carousel';

import config from 'config';

export default class ProductSlider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    imgs: React.PropTypes.array,
  };

  render() {
    return (
      <div className="product-list__slider" ref={(c) => { this.productListSlider = c; }}>
        { _(this.props.imgs).size() > 0 &&
          <img src={config.apiUrl + 'files/' + _(this.props.imgs).sample().fileIndex + '.jpg'} alt="" />
        }
        { _(this.props.imgs).size() === 0 &&
          <img src="http://placehold.it/356x387" alt="" />
        }
      </div>
    );
  }

}
