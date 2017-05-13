import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import classNames from 'classnames';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { makeSelectRegisterError } from '../selectors';

import OAuthLogins from '../oauthLogins';

class RegisterForm extends React.Component {

  static propTypes = {
    handleSubmit: React.PropTypes.func,
    registerError: React.PropTypes.oneOf([
      React.PropTypes.string,
      React.PropTypes.bool,
    ]),
  };

  renderField({ input, type, forcedError, meta: { error, touched }, ...props }) {
    return (
      <div className={classNames('form-group', { 'has-danger': forcedError || (touched && error) })}>
        <input {...input} {...props} type={type} />
        {
          ((touched && error) || forcedError) && <div className="form-control-feedback">{forcedError || error}</div>
        }
      </div>
    );
  }

  render() {
    const { handleSubmit, registerError } = this.props;

    return (
      <form className="proceed_box" onSubmit={handleSubmit}>
        <h3 className="mb-3">New Customer</h3>
        <p className="mb-5">Sign up to place your order and receive exclusive offers.</p>
        <Field component={this.renderField} forcedError={registerError} name="email" type="email" className="form-control" placeholder="Your@email" />
        <Field component={this.renderField} name="full-name" type="text" className="form-control" placeholder="Full name" />
        <Field component={this.renderField} name="password" type="password" className="form-control" placeholder="Password" />
        <button className="btn btn-block mt-4 mb-4 text-uppercase">Sign Up</button>
        <OAuthLogins />
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

const form = reduxForm({
  form: 'register',
  validate,
})(RegisterForm);

const mapStateToProps = createStructuredSelector({
  registerError: makeSelectRegisterError(),
});

export default connect(mapStateToProps)(form);
