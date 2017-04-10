import React from 'react';
import Helmet from 'react-helmet';

import { Link } from 'react-router';

import SocialNav from 'components/SocialNav';

class AboutCookies extends React.Component {

  render() {
    return (
      <div>
        <Helmet title="About cookies" />
        <div className="text-page" data-reveal>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-10 offset-sm-1">
                <div className="wsw">
                  <h1>About cookies</h1>
                  <p>
                    This site uses cookies to ensure that we give you the best user experience we can. By continuing to browse the site you are agreeing to our use of cookies. To find out more about the cookies, see our <Link to="/terms-of-service">TERMS OF SERVICE</Link> and our Personal Data Protection and Usage of Cookie Files.
                  </p>
                  <p>
                    You can actively manage cookies that are saved on your computer. If you don&#39;t trust a particular website you can block cookies for that site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SocialNav links />
      </div>
    );
  }

}

export default AboutCookies;
