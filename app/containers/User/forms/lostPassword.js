import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import { Link } from 'react-router';

class LostPassword extends React.Component {

  static propTypes = {
    handleSubmit: React.PropTypes.func,
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="proceed_box" onSubmit={handleSubmit}>
        <h3 className="mb-3">Returning Customer</h3>
        <h4 className="mb-4">Forgotten password</h4>
        <p className="mb-5">Have you forgot your password? Type in your email and we will send you new one!</p>
        <div className="form-group">
          <Field component="input" name="email" type="text" className="form-control" placeholder="Your@email" />
        </div>
        <div className="pt-4 pb-4">
          <Link to="/login" className="forgot-pass d-block pt-1 text-center ">Back to login</Link>
        </div>
        <button type="submit" className="btn btn-block mt-4 mb-4 text-uppercase">Send</button>
      </form>
    );
  }

}

export default reduxForm({
  form: 'lostPassword',
})(LostPassword);
