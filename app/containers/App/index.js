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

import classNames from 'classnames';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import '../../sass/app.scss';

import {
  makeSelectMenuActive,
  makeIsHomepage,
} from './selectors';

import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import Cookies from './Cookies';

import Helmet from 'react-helmet';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
    menuActive: React.PropTypes.bool,
    isHomepage: React.PropTypes.bool,
  };

  render() {
    return (
      <div id="body" className={classNames({ hp: this.props.isHomepage, sp: !this.props.isHomepage })}>
        <Helmet
          htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
          titleTemplate="%s | LAINFINI"
          defaultTitle="Homepage | LAINFINI"
        />
        <Header />
        <main id="page">
          <input type="checkbox" id="op" checked={this.props.menuActive} />
          <div className="overlay overlay__hugeinc">
            <label htmlFor="op"></label>
            <Menu />
          </div>
          {React.Children.toArray(this.props.children)}
        </main>
        <Cookies />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  menuActive: makeSelectMenuActive(),
  isHomepage: makeIsHomepage(),
});

export default connect(mapStateToProps)(App);
