import React from 'react';

class templates extends React.Component {

  static propTypes = {
    routeParams: React.PropTypes.object,
  };

  render() {
    const innerHtml = { __html: require('../../../templates/' + this.props.routeParams.template + '.html') };

    return (
      <div dangerouslySetInnerHTML={innerHtml} />
    );
  }

}

export default templates;
