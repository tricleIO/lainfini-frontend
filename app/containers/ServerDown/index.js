import React from 'react';

import Helmet from 'react-helmet';

class ServerDown extends React.Component {
  render() {
    return (
      <main id="page">
        <Helmet title="Server is down" />
        <div className="p_503">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <p>
                  Sorry, <br />
                  our server <br />
                  is down
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default ServerDown;
