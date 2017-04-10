import React from 'react';

import classNames from 'classnames';

import _ from 'lodash';

import $ from 'jquery';

import 'select2';

export default class Select extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    onChange: React.PropTypes.func,
    input: React.PropTypes.object,
  }

  componentDidMount() {
    if (this.props.input) {
      this.props.input.onChange(this.select.value);
    }

    $(this.select).select2({
      theme: 'classic',
    });

    $(this.select).on('select2:select', (event) => {
      if (_(this.props.onChange).isFunction()) {
        this.props.onChange(event, this.select.value);
      }
      if (this.props.input) {
        this.props.input.onChange(this.select.value);
      }
    });
  }

  getValue() {
    return this.select.value;
  }

  render() {
    const { className, input, meta, ...props } = this.props;
    return (
      <div className="ui-interactive">
        <select name={input.name} className={classNames('ui-interactive__select', className)} style={{ width: '100%' }} ref={(c) => { this.select = c; }} {...props} />
      </div>
    );
  }

}
