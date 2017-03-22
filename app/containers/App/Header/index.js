/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import {
  changeMenuState,
} from '../actions';

import {
  makeSelectMenuActive,
} from '../selectors';

import React from 'react';
import classNames from 'classnames';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    menuActive: React.PropTypes.bool,
    changeMenuState: React.PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.props.changeMenuState(!this.props.menuActive);
  }

  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <label htmlFor="op">
                <div id="nav-lines" className={classNames({ active: this.props.menuActive })} onClick={this.changeState}>
                  <svg viewBox="0 0 64 64">
                    <line id="nav-line-1" x1="8" x2="56" y1="16" y2="16" className="nav-line" />
                    <line id="nav-line-2" x1="8" x2="56" y1="32" y2="32" className="nav-line" />
                    <line id="nav-line-3" x1="8" x2="56" y1="48" y2="48" className="nav-line" />
                    <line x1="16" x2="48" y1="16" y2="48" className="cross-line" />
                    <line x1="16" x2="48" y1="48" y2="16" className="cross-line" />
                    <rect className="rect" width="42" height="42" x="11" y="11" />
                  </svg>
                </div>
              </label>
            </div>
            <div className="col-5 push-1">
              <a href="" className="logo text-center">lainfini</a>
            </div>
            <div className="col-5 text-right header_action">
              <a href="" className="shop-active"><i className="cart-state">23</i><i className="icon icon-shop"></i></a>
            </div>
          </div>
        </div>
      </header>
    );
  }

}

export function mapDispatchToProps(dispatch) {
  return {
    changeMenuState: (state) => dispatch(changeMenuState(state)),
  };
}


const mapStateToProps = createStructuredSelector({
  menuActive: makeSelectMenuActive(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

