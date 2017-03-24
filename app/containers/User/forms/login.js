import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';

import { FormattedMessage } from 'react-intl';
import messages from '../messages';

class LoginForm extends React.Component {

  static propTypes = {
    handleSubmit: React.PropTypes.func,
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email"><FormattedMessage {...messages.email} /></label>
          <Field name="email" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="password"><FormattedMessage {...messages.password} /></label>
          <Field name="password" component="input" type="password" />
        </div>
        <button type="submit"><FormattedMessage {...messages.login} /></button>
      </form>
    );
  }

}

export default reduxForm({
  form: 'login',
})(LoginForm);
