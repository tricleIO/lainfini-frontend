import React from 'react';

import Heading from 'components/Heading';

import { Link } from 'react-router';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default class CategoryCard extends React.PureComponent {

  static propTypes = {
    type: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.kachinaBigImg = require('./img/kachina_big.png');
    this.kachinaImg = require('./img/kachina.png');
    this.silkBigImg = require('./img/silk_big.png');
    this.silkImg = require('./img/profile_photo.png');
  }

  render() {
    return (
      <section className="category-card">
        <div className="container">
          <div className="row" data-reveal>
            <div className="col-12 col-sm-8 offset-sm-2 text-center">
              <Heading type={this.props.type} subtitle={<FormattedMessage {...messages.smallTitle} />} title={<FormattedMessage {...messages.bigTitle} />} />
            </div>
          </div>
          <div className="row category-card__contain" style={{ backgroundColor: '#f4f3f3' }}>
            <div className="col-sm-5 offset-sm-1 category-card__item" data-reveal>
              <img src={this.kachinaBigImg} className="img-fluid" alt="category textil" />
              <div className="category-card__item__child">
                <img src={this.kachinaImg} className="img-fluid" alt="category" />
              </div>
            </div>
            <div className="col-sm-5 category-card__item" data-reveal>
              <img src={this.silkBigImg} className="img-fluid" alt="category textil" />
              <div className="category-card__item__child">
                <img src={this.silkImg} className="img-fluid" alt="category" />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 text-center category-card__benefits" data-reveal>
              <h3 className="category-card__benefits__title"><FormattedMessage {...messages.heading1} /></h3>
              <p>
                <FormattedMessage {...messages.description1} />
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 text-center category-card__benefits" data-reveal>
              <h3 className="category-card__benefits__title"><FormattedMessage {...messages.heading2} /></h3>
              <p>
                <FormattedMessage {...messages.description2} />
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 text-center category-card__benefits" data-reveal>
              <h3 className="category-card__benefits__title"><FormattedMessage {...messages.heading3} /></h3>
              <p>
                <FormattedMessage {...messages.description3} />
              </p>
            </div>
            <div className="col-12 text-center offset-top-50" data-reveal>
              <Link className="btn" to="/eshop"><FormattedMessage {...messages.button} /></Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

}
