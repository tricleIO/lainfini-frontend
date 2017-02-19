import React from 'react';

import Heading from 'components/Heading';

export default class CategoryCard extends React.PureComponent {

  static propTypes = {
    children: React.PropTypes.node,
    type: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.flowerBgImg = require('./img/flower-bg.png');
    this.kachinaBigImg = require('./img/kachina_big.jpg');
    this.kachinaImg = require('./img/kachina.png');
    this.silkBigImg = require('./img/silk_big.jpg');
    this.silkImg = require('./img/profile_photo.jpg');
  }

  render() {
    return (
      <section className="category-card">
        <div className="container">
          <div className="row" data-reveal>
            <div className="col-12 col-sm-8 offset-sm-2 text-center">
              <Heading type="h2" subtitle="La Infini design scarves collection" title="original handmade scarves unique designs" />
            </div>
          </div>
          <div className="row category-card__contain" style={{ backgroundImage: 'url("' + this.flowerBgImg + '")' }}>
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
            <div className="col-12 col-sm-4 text-center category-card__benefits" data-reveal>
              <h3 className="category-card__benefits__title">original design</h3>
              <p>
                Sed quis lacus. Duis rutrum lacinia odio. Sed ac quam non odio ullamcorper tempor. Morbi tellus elit, aliquet.
                ut, tempor ut, elementum sodales, lorem. Morbi in leo. Sed hendrerit mollis nisl.
              </p>
            </div>
            <div className="col-12 col-sm-4 text-center category-card__benefits" data-reveal>
              <h3 className="category-card__benefits__title">european quality</h3>
              <p>
                Sed quis lacus. Duis rutrum lacinia odio. Sed ac quam non odio ullamcorper tempor. Morbi tellus elit, aliquet.
                ut, tempor ut, elementum sodales, lorem. Morbi in leo. Sed hendrerit mollis nisl.
              </p>
            </div>
            <div className="col-12 col-sm-4 text-center category-card__benefits" data-reveal>
              <h3 className="category-card__benefits__title">unique experience</h3>
              <p>
                Sed quis lacus. Duis rutrum lacinia odio. Sed ac quam non odio ullamcorper tempor. Morbi tellus elit, aliquet.
                ut, tempor ut, elementum sodales, lorem. Morbi in leo. Sed hendrerit mollis nisl.
              </p>
            </div>
            <div className="col-12 text-center offset-top-50" data-reveal>
              <a href="" className="btn">shop the designs</a>
            </div>
          </div>
        </div>
      </section>
    );
  }

}
