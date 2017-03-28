import React from 'react';

export default class ItemCounter extends React.Component {
  static propTypes = {
    defaultValue: React.PropTypes.number,
    onChange: React.PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultValue ? props.defaultValue : 1,
    };
    this.onPlusClick = this.onPlusClick.bind(this);
    this.onMinusClick = this.onMinusClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value !== prevState.value) {
      this.onChange();
    }
  }

  onPlusClick() {
    const value = this.state.value + 1;
    if (this.state.value > 0) {
      this.onChange(value);
      this.setState({
        value,
      });
    }
  }

  onMinusClick() {
    const value = this.state.value - 1;
    if (this.state.value > 1) {
      this.onChange(value);
      this.setState({
        value,
      });
    }
  }

  onChange(val) {
    return this.props.onChange(val);
  }

  value() {
    return this.state.value;
  }

  render() {
    return (
      <div className="item-counter">
        <i className="minus" onClick={this.onMinusClick}>-</i>
        <span className="status">{this.state.value}</span>
        <i className="plus" onClick={this.onPlusClick}>+</i>
      </div>
    );
  }
}
