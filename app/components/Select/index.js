import React from 'react';

import classNames from 'classnames';

import $ from 'jquery';

import 'select2';

export default class Select extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
  }

  componentDidMount() {
    $(this.select).select2({
      theme: 'classic',
    });
  }

  render() {
    const { className } = this.props;
    return (
      <div className="ui-interactive">
        <select className={classNames('ui-interactive__select', className)} style={{ width: '100%' }} ref={(c) => { this.select = c; }} {...this.props} />
      </div>
    );
  }

}
