import React from 'react';

import Heading from 'components/Heading';
import SocialNav from 'components/SocialNav';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import LoginForm from './forms/login';

import { connect } from 'react-redux';

import {
  loginUser,
} from './actions';

class User extends React.Component {

  static propTypes = {
    loginUser: React.PropTypes.func,
  }

  handleSubmit = (values) => {
    this.props.loginUser(values.get('email'), values.get('password'));
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

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password)),
  };
}

export default connect(null, mapDispatchToProps)(User);
