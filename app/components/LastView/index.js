import React from 'react';

import _ from 'lodash';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Link } from 'react-router';

import config from 'config';

import { makeSelectLastViewed } from 'containers/App/selectors';

class LastView extends React.Component {

  static propTypes = {
    products: React.PropTypes.array,
  }

  render() {
    const products = _(this.props.products).isArray ? _(this.props.products).take(4).value() : [];
    return (
      <div className="last-view offset-bottom-50">
        {_(products).size() > 0 &&
          <div className="container">
            <div className="row">
              <div className="col-12 text-center offset-bottom-30">
                <h3>last viewed designs</h3>
              </div>
              {products.map((product, index) =>
                <div className="col-12 col-sm-6 col-md-3" key={index}>
                  <div className="last-view__item">
                    <Link to={'/catalog/' + product.slug}>
                      <img src={config.apiUrl + 'files/' + product.mainImage.fileIndex + '.jpg'} className="img-fluid" alt="" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        }
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  products: makeSelectLastViewed(),
});

export default connect(mapStateToProps)(LastView);
