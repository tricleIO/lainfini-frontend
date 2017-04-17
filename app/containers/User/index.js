import React from 'react';
import Helmet from 'react-helmet';

import SocialNav from 'components/SocialNav';

import LoginForm from './forms/login';
import RegisterForm from './forms/register';
import LostPasswordForm from './forms/lostPassword';

import { connect } from 'react-redux';

import {
  loginUser,
  registerUser,
  requestPassword,
  loginWithFacebook,
} from './actions';

class User extends React.Component {

  static propTypes = {
    loginUser: React.PropTypes.func,
    registerUser: React.PropTypes.func,
    requestPassword: React.PropTypes.func,
    loginWithFacebook: React.PropTypes.func,
    params: React.PropTypes.object,
  }

  handleLogin = (values) => {
    this.props.loginUser(values.get('email'), values.get('password'));
  }

  handleRegister = (values) => {
    this.props.registerUser(values.get('email'), values.get('full-name'), values.get('password'));
  }

  handleLostPassword = (values) => {
    this.props.requestPassword(values.get('email'));
  };

  render() {
    console.log(this.props);
    return (
      <div className="login_page">
        <Helmet title="Login" />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="heading heading--mod-bottom mb-5" data-reveal="true">
                <h1 className="heading__title"><span>please login to proceed</span></h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <RegisterForm onSubmit={this.handleRegister} />
            </div>
            <div className="col-12 col-lg-6">
              {this.props.params.splat !== 'forgotten-password' &&
                <LoginForm onSubmit={this.handleLogin} loginWithFacebook={this.props.loginWithFacebook} />
              }
              {this.props.params.splat === 'forgotten-password' &&
                <LostPasswordForm onSubmit={this.handleLostPassword} />
              }
            </div>
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
    registerUser: (email, fullName, password) => dispatch(registerUser(email, fullName, password)),
    requestPassword: (email) => dispatch(requestPassword(email)),
    loginWithFacebook: () => dispatch(loginWithFacebook()),
  };
}

export default connect(null, mapDispatchToProps)(User);
