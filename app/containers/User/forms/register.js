import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import classNames from 'classnames';

class RegisterForm extends React.Component {

  static propTypes = {
    handleSubmit: React.PropTypes.func,
  };

  render() {
    const { handleSubmit } = this.props;

    const renderField = ({ input, type, meta: { error, touched }, ...props }) => (
      <div className={classNames('form-group', { 'has-danger': touched && error })}>
        <input {...input} {...props} type={type} />
      </div>
    );

    return (
      <form className="proceed_box" onSubmit={handleSubmit}>
        <h3 className="mb-3">New Customer</h3>
        <p className="mb-5">Sign up to place your order and receive exclusive offers.</p>
        <Field component={renderField} name="email" type="email" className="form-control" placeholder="Your@email" />
        <Field component={renderField} name="full-name" type="text" className="form-control" placeholder="Full name" />
        <Field component={renderField} name="password" type="password" className="form-control" placeholder="Password" />
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

const validate = (val) => {
  const values = val.toJS();
  const errors = {};
  if (!values['full-name']) {
    errors['full-name'] = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

export default reduxForm({
  form: 'register',
  validate,
})(RegisterForm);
