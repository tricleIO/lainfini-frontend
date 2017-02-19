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

export default class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <nav>
        <ul>
          <li><a href="/"><FormattedMessage {...messages.homepage} /></a></li>
          <li><a href="/designers"><FormattedMessage {...messages.designers} /></a></li>
          <li><a href="/profil"><FormattedMessage {...messages.profil} /></a></li>
          <li><a href="/studio"><FormattedMessage {...messages.studio} /></a></li>
          <li><a href="/eshop"><FormattedMessage {...messages.eshop} /></a></li>
        </ul>
      </nav>
    );
  }
}
