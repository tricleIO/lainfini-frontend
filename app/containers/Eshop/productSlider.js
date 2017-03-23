import React from 'react';

import _ from 'lodash';

import config from 'config';

export default class ProductSlider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    imgs: React.PropTypes.array,
  };

  constructor(props) {
    super(props);

    this.state = {
      actualImg: 0,
    };
  }

  componentDidMount() {
    this.timer = window.setInterval(() => this.findNextImg(), 5000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  findNextImg() {
    const count = _(this.props.imgs).size() - 1;

    if (this.state.actualImg < count) {
      this.setState({
        actualImg: this.state.actualImg + 1,
      });
    } else {
      this.setState({
        actualImg: 0,
      });
    }
  }

  render() {
    return (
      <div className="product-list__slider" ref={(c) => { this.productListSlider = c; }}>
        {this.props.imgs.map((img, index) =>
          <img src={config.apiUrl + 'files/' + img.fileIndex + '.jpg'} className={index === this.state.actualImg ? 'active' : null} alt="" />
        )}
        {_(this.props.imgs).size() === 0 &&
          <img src="http://placehold.it/356x387" alt="" />
        }
      </div>
    );
  }

}
