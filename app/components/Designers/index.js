import React from 'react';

import Heading from 'components/Heading';

export default class Designers extends React.PureComponent {

  static propTypes = {
    type: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.annaImg = require('./img/anna.jpg');
    this.karelImg = require('./img/karel.jpg');
    this.martaImg = require('./img/marta.jpg');
    this.miroImg = require('./img/miro.jpg');
  }

  render() {
    return (
      <section className="designers">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2 text-center" data-reveal>
              <Heading type={this.props.type} subtitle="need help? dont hesitate to use our consultants" title="be in touch with designers" intro="Sed quis lacus. Duis rutrum lacinia odio. Sed ac quam non odio ullamcorper tempor. Morbi tellus elit, aliquet. ut, tempor ut, elementum sodales, lorem. Morbi in leo. Sed hendrerit mollis nisl." />
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="designers__item text-sm-left">
                <div className="designers__item__photo text-center">
                  <img src={this.karelImg} className="img-fluid d-inline-block" alt="" />
                </div>
                <div className="designers__item__content text-center">
                  <h4 className="text-uppercase">Karel Novák</h4>
                  <p>Sed quis lacus. Duis rutrum lacinia odio. Sed ac quam non odio ullamcorper tempor. Morbi tell</p>
                  <a href="">meet Karel</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="designers__item text-sm-left">
                <div className="designers__item__photo text-center">
                  <img src={this.annaImg} className="img-fluid d-inline-block" alt="" />
                </div>
                <div className="designers__item__content text-center">
                  <h4 className="text-uppercase">Anna Zysova</h4>
                  <p>Sed quis lacus. Duis rutrum lacinia odio. Sed ac quam non odio ullamcorper tempor. Morbi tell</p>
                  <a href="">meet Karel</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="designers__item text-sm-left">
                <div className="designers__item__photo text-center">
                  <img src={this.miroImg} className="img-fluid d-inline-block" alt="" />
                </div>
                <div className="designers__item__content text-center">
                  <h4 className="text-uppercase">Miro Hának</h4>
                  <p>Sed quis lacus. Duis rutrum lacinia odio. Sed ac quam non odio ullamcorper tempor. Morbi tell</p>
                  <a href="">meet Karel</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="designers__item text-sm-left">
                <div className="designers__item__photo text-center">
                  <img src={this.martaImg} className="img-fluid d-inline-block" alt="" />
                </div>
                <div className="designers__item__content text-center">
                  <h4 className="text-uppercase">Marta Nová</h4>
                  <p>Sed quis lacus. Duis rutrum lacinia odio. Sed ac quam non odio ullamcorper tempor. Morbi tell</p>
                  <a href="">meet Karel</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}
