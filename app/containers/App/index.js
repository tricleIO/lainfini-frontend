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

import '../../sass/app.scss';

import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div id="body">
        <Header />
        <main id="page">
          <input type="checkbox" id="op" />
          <div className="overlay overlay__hugeinc">
            <label htmlFor="op"></label>
            <Menu />
          </div>
          {React.Children.toArray(this.props.children)}
        </main>
        <Footer />
      </div>
    );
  }
}
