import React from 'react';

import Heading from 'components/Heading';

export default class Currator extends React.PureComponent {

  static propTypes = {
    type: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.curratorImg = require('./img/currator.jpg');
    this.curratorSmallImg = require('./img/currator-small.jpg');
  }

  render() {
    return (
      <div className="currator">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 text-center">
              <Heading subtitle="carefully prepared just for you" title="currated collection lainfini" type={this.props.type} intro="Sed quis lacus. Duis rutrum lacinia odio. Sed ac quam non odio ullamcorper tempor. Morbi tellus elit, aliquet. ut, tempor ut, elementum sodales, lorem. Morbi in leo. Sed hendrerit mollis nisl." />
            </div>
            <div className="col-6 offset-5 currator__photo offset-vertical-10" data-reveal>
              <img src={this.curratorImg} className="img-fluid" alt="currator" />
              <img src={this.curratorSmallImg} className="img-fluid currator__photo__small" alt="currator-small" />
            </div>
            <div className="col-10 offset-1 currator__context text-center offset-vertical-30">
              <span className="currator__context__title" data-reveal>mirka talavaskova</span>
              <p data-reveal>
                Sed quis lacus. Duis rutrum lacinia odio. Sed ac quam non odio ullamcorper tempor. Morbi tell
              </p>
              <div className="btn__inline offset-vertical-30">
                <div className="col-12 col-sm-6" data-reveal>
                  <a href="" className="btn">lainfini studio</a>
                </div>
                <div className="col-12 col-sm-6" data-reveal>
                  <a href="" className="btn">currators’ profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
