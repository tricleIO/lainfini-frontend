import React from 'react';

import { connect } from 'react-redux';

import {
  changeMenuState,
} from '../actions';

import { Link } from 'react-router';

class MenuItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
    changeMenuState: React.PropTypes.func,
    to: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.closeMenu = this.closeMenu.bind(this);
  }

  closeMenu() {
    this.props.changeMenuState(false);
  }

  render() {
    return (
      <Link to={this.props.to} onClick={this.closeMenu}>
        {React.Children.toArray(this.props.children)}
      </Link>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    changeMenuState: (state) => dispatch(changeMenuState(state)),
  };
}

export default connect(null, mapDispatchToProps)(MenuItem);
