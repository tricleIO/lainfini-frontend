import React from 'react';

import classNames from 'classnames';

export default class Heading extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    mod: React.PropTypes.bool,
    subtitle: React.PropTypes.string,
    title: React.PropTypes.string,
    type: React.PropTypes.string,
    intro: React.PropTypes.string,
    line: React.PropTypes.bool,
  };

  render() {
    const headingElement = React.createElement(this.props.type, { className: 'heading__title' }, this.props.title);
    return (
      <div className={classNames('heading', { 'heading--mod-light': this.props.mod, 'heading--mod-bottom': this.props.line })} data-reveal>
        <div className="heading__subtitle">{this.props.subtitle}</div>
        {headingElement}
        {this.props.intro &&
          <p className="heading__intro">
            {this.props.intro}
          </p>
        }
      </div>
    );
  }

}
