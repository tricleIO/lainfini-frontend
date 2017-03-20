import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';

class LoginForm extends React.Component {

  static propTypes = {
    handleSubmit: React.PropTypes.func,
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }

}

export default reduxForm({
  form: 'login',
})(LoginForm);
