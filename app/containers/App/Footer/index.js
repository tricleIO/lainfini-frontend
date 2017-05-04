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

import { Link } from 'react-router';

export default class Footer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  constructor(props) {
    super(props);

    this.pdf = require('files/catalog.pdf');
  }

  render() {
    return (
      <footer data-reveal>
        <div className="container">
          <div className="row">
            <div className="col-md-4 hidden-sm-down">
              <ul>
                <li>
                  <a href="mailto:info@lainfini.com">info@lainfini.com</a>
                </li>
                <li>
                  <a href="mailto:jody@frame-pr.net">Press inquries</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 text-center">
              <Link to="/" className="logo">LAINFINI</Link>
              <ul className="nav-mobile hidden-md-up">
                <li>
                  <a href="mailto:info@lainfini.com">info@lainfini.com</a>
                  <a href="tel:+18004050388">+1 800 405 0388</a>
                  <a href="">more about the brand</a>
                </li>
              </ul>
              <p className="copyright">
<<<<<<< HEAD
                2017 &copy; Copyright la infini
=======
                2016 Copyright LAINFINI
>>>>>>> footer
              </p>
            </div>
            <div className="col-sm-4 text-sm-right hidden-sm-down">
              <ul>
                <li>
                  <a href="tel:+18004050388">+1 800 405 0388</a>
                </li>
                <li>
                  <a href={this.pdf} target="_blank">download our brochure</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
