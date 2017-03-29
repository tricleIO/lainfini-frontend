import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';

class RegisterForm extends React.Component {

  static propTypes = {
    handleSubmit: React.PropTypes.func,
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="proceed_box" onSubmit={handleSubmit}>
        <h3 className="mb-3">New Customer</h3>
        <p className="mb-5">Sign up to place your order and receive exclusive offers.</p>
        <div className="form-group">
          <Field component="input" name="email" type="email" className="form-control" placeholder="Your@email" />
        </div>
        <div className="form-group">
          <Field component="input" name="full-name" type="text" className="form-control" placeholder="Full name" />
        </div>
        <div className="form-group">
          <Field component="input" name="password" type="password" className="form-control" placeholder="Password" />
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
    );
  }

}

export default reduxForm({
  form: 'register',
})(RegisterForm);
