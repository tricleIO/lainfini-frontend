import React from 'react';

import { Link } from 'react-router';

export default class LastView extends React.Component {

  constructor(props) {
    super(props);

    this.last1Img = require('./img/last-1.jpg');
    this.last2Img = require('./img/last-2.jpg');
  }

  render() {
    return (
      <div className="last-view offset-bottom-50">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center offset-bottom-30">
              <h3>last viewed designs</h3>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="last-view__item">
                <Link to="/eshop/detail/1">
                  <img src={this.last1Img} className="img-fluid" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="last-view__item">
                <Link to="/eshop/detail/2">
                  <img src={this.last2Img} className="img-fluid" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="last-view__item">
                <Link to="/eshop/detail/3">
                  <img src={this.last1Img} className="img-fluid" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="last-view__item">
                <Link to="/eshop/detail/4">
                  <img src={this.last2Img} className="img-fluid" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
