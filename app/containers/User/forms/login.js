import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import { Link } from 'react-router';
import { OAuth2 } from 'oauth';

class LoginForm extends React.Component {

  static propTypes = {
    handleSubmit: React.PropTypes.func,
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="proceed_box" onSubmit={handleSubmit}>
        <h3 className="mb-3">Returning Customer</h3>
        <p className="mb-5">Log in to recall your saved details and speed up your purchase.</p>
        <div className="form-group">
          <Field component="input" name="email" type="text" className="form-control" placeholder="Your@email" />
        </div>
        <div className="form-group">
          <Field component="input" name="password" type="password" className="form-control" placeholder="Password" />
        </div>
        <div className="pt-4 pb-4">
          <Link to="/login/forgotten-password" className="forgot-pass d-block pt-1 text-center ">Forgotten password?</Link>
        </div>
        <button type="submit" className="btn btn-block mt-4 mb-4 text-uppercase">Sign In</button>
        <p className="text-center">Or sign in with your existing social media account</p>
        <ul className="social-nav__icons">
          <li><a><i className="icon icon-facebook" /></a></li>
          <li><a><i className="icon icon-twitter" /></a></li>
          <li><a><i className="icon icon-instagram" /></a></li>
          <li><a><i className="icon icon-google" /></a></li>
        </ul>
      </form>
    );
  }

}

export default reduxForm({
  form: 'login',
})(LoginForm);
