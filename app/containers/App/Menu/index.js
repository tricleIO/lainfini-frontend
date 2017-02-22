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

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import MenuItem from './menuItem';

export default class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <nav>
        <ul>
          <li><MenuItem to="/"><FormattedMessage {...messages.homepage} /></MenuItem></li>
          <li><MenuItem to="/designers"><FormattedMessage {...messages.designers} /></MenuItem></li>
          <li><MenuItem to="/profile"><FormattedMessage {...messages.profile} /></MenuItem></li>
          <li><MenuItem to="/studio"><FormattedMessage {...messages.studio} /></MenuItem></li>
          <li><MenuItem to="/eshop"><FormattedMessage {...messages.eshop} /></MenuItem></li>
        </ul>
      </nav>
    );
  }
}
