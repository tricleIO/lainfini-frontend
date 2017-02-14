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

export default class Footer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <footer data-reveal>
        <div className="container">
          <div className="row">
            <div className="col-md-4 hidden-sm-down">
              <ul>
                <li>
                  <a href="">info@lainfini.com</a>
                </li>
                <li>
                  <a href="">Press inquiries</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 text-center">
              <a href="/" className="logo">lainfini</a>
              <ul className="nav-mobile hidden-md-up">
                <li>
                  <a href="">info@lainfini.com</a>
                  <a href="">Press inquiries</a>
                  <a href="">more about the brand</a>
                </li>
              </ul>
              <p className="copyright">
                2016 Copyright la infini
              </p>
            </div>
            <div className="col-sm-4 text-sm-right hidden-sm-down">
              <ul>
                <li>
                  <a href="">download our brochure</a>
                </li>
                <li>
                  <a href="">more about the brand</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
