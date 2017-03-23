/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main id="page">
        <div className="p_404">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <p>
                  Sorry, <br />
                  the page you are looking for <br />
                  cannot be found
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
