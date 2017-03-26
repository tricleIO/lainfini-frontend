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
      <div className="login_page">
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
              <form className="proceed_box">
                <h3 className="mb-3">New Customer</h3>
                <p className="mb-5">Sign up to place your order and receive exclusive offers.</p>
                <div className="form-group">
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Your@email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Your surname" />
                </div>
                <button className="btn btn-block mt-4 mb-4 text-uppercase">Sign Up</button>
                <p className="text-center">Or sign in with your existing social media account</p>
                <ul className="social-nav__icons">
                  <li><a href><i className="icon icon-facebook" /></a></li>
                  <li><a href><i className="icon icon-twitter" /></a></li>
                  <li><a href><i className="icon icon-instagram" /></a></li>
                  <li><a href><i className="icon icon-google" /></a></li>
                </ul>
              </form>
            </div>
            <div className="col-12 col-lg-6">
              <LoginForm onSubmit={this.handleSubmit} />
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
  };
}

export default connect(null, mapDispatchToProps)(User);
