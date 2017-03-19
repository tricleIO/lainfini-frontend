import React from 'react';

class templates extends React.Component {

  static propTypes = {
    routeParams: React.PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.innerHtml = { __html: require('../../../templates/' + props.routeParams.template + '.html') };
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={this.innerHtml} />
    );
  }

}

export default templates;
