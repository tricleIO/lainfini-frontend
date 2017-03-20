import React from 'react';

import Heading from 'components/Heading';
import SocialNav from 'components/SocialNav';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import LoginForm from './forms/login';

class User extends React.Component {

  handleSubmit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <div>
        <div className="text-center">
          <Heading type="h1" title={<FormattedMessage {...messages.title} />} />
        </div>

        <div className="user-panel">
          <div className="login-panel">
            <LoginForm onSubmit={this.handleSubmit} />
          </div>
          <div className="register-panel">

          </div>
        </div>

        <SocialNav links />
      </div>
    );
  }

}

export default User;
