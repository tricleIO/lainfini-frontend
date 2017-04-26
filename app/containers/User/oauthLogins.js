import React from 'react';
import { OAuth2 } from 'oauth';
import config from 'config';

class OAuthLogins extends React.Component {

  constructor(props) {
    super(props);

    const facebookOAuth = new OAuth2(
      config.facebookAppId,
      config.facebookAppSecret,
      'https://www.facebook.com/',
      'v2.8/dialog/oauth',
      null
    );
    this.facebookLink = facebookOAuth.getAuthorizeUrl({
      redirect_uri: config.serverUrl + 'login/facebook',
      response_type: 'token',
      scope: ['public_profile', 'email', 'user_friends', 'user_about_me'],
    });
  }

  render() {
    return (
      <div>
        {/* <p className="text-center">Or sign in with your existing social media account</p>
        <ul className="social-nav__icons">
          <li><a href={this.facebookLink}><i className="icon icon-facebook" /></a></li>
          <li><a><i className="icon icon-twitter" /></a></li>
          <li><a><i className="icon icon-instagram" /></a></li>
          <li><a><i className="icon icon-google" /></a></li>
        </ul> */}
      </div>
    );
  }

}

export default OAuthLogins;
