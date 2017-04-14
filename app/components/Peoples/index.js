import React from 'react';

import Heading from 'components/Heading';

import { Link } from 'react-router';

export default class SocialNav extends React.PureComponent {

  static propTypes = {
    btnInline: React.PropTypes.bool,
    isShop: React.PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.peoplesImg = require('./img/Lide_5s.png');
  }

  render() {
    return (
      <div className="peoples">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <Heading type="h2" subtitle={this.props.isShop ? 'Atelier LAINFINI Designers' : ''} title={this.props.isShop ? 'Meet The People Behind The Brand' : 'Atelier LAINFINI: A Collaborative Collective'} />
            </div>
            <div className="col-12 text-center" data-reveal>
              <img src={this.peoplesImg} className="img-fluid d-inline-block" alt="peoples" />
            </div>
            { this.props.btnInline &&
              <div className="col-12 offset-vertical-50">
                <div className="row btn__inline">
                  <div className="col-12 col-sm-6 offset-sm-3 text-center">
                    <Link to="/studio" className="btn">Design House Profile</Link>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }

}
