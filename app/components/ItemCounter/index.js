import React from 'react';

export default class ItemCounter extends React.Component {
  static propTypes = {
    defaultValue: React.PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultValue ? props.defaultValue : 1,
    };
    this.onPlusClick = this.onPlusClick.bind(this);
    this.onMinusClick = this.onMinusClick.bind(this);
  }

  onPlusClick() {
    this.setState({
      value: this.state.value + 1,
    });
  }

  onMinusClick() {
    if (this.state.value > 0) {
      this.setState({
        value: this.state.value - 1,
      });
    }
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
