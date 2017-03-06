import React from 'react';

import Heading from 'components/Heading';

export default class SocialNav extends React.PureComponent {

  static propTypes = {
    btnInline: React.PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.peoplesImg = require('./img/peoples.png');
  }

  render() {
    return (
      <div className="peoples">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <Heading type="h2" subtitle="lainfini designers" title="meet the people who stand behind" />
            </div>
            <div className="col-12 text-center" data-reveal>
              <img src={this.peoplesImg} className="img-fluid d-inline-block" alt="peoples" />
            </div>
            { this.props.btnInline &&
              <div className="col-12 offset-vertical-50">
                <div className="row btn__inline">
                  <div className="col-12 col-sm-5 offset-sm-1">
                    <a href="" className="btn">designers profiles</a>
                  </div>
                  <div className="col-12 col-sm-5">
                    <a href="" className="btn">scarves - making of</a>
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
