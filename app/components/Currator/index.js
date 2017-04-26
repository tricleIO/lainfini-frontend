import React from 'react';

import Heading from 'components/Heading';

import { Link } from 'react-router';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

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
            <div className="col-12 text-center">
              <Heading subtitle={<FormattedMessage {...messages.smallTitle} />} title={<FormattedMessage {...messages.bigTitle} />} type={this.props.type} intro={<FormattedMessage {...messages.intro} />} />
            </div>
            <div className="col-6 offset-5 currator__photo offset-vertical-10" data-reveal>
              <img src={this.curratorImg} className="img-fluid" alt="currator" />
              <img src={this.curratorSmallImg} className="img-fluid currator__photo__small" alt="currator-small" />
            </div>
            <div className="col-10 offset-1 currator__context text-center offset-vertical-30">
              <span className="currator__context__title" data-reveal><FormattedMessage {...messages.name} /></span>
              <p data-reveal>
                <FormattedMessage {...messages.description} />
              </p>
              <div className="btn__inline offset-vertical-30">
                <div className="col-12 col-sm-6" data-reveal>
                  <Link to="/studio" className="btn"><FormattedMessage {...messages.studioLink} /></Link>
                </div>
                <div className="col-12 col-sm-6" data-reveal>
                  <Link to="/profile" className="btn"><FormattedMessage {...messages.profileLink} /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
