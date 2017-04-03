import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import uuidV4 from 'uuid/v4';
import classNames from 'classnames';

import Select from 'components/Select';

class LoginForm extends React.Component {

  static propTypes = {
    handleSubmit: React.PropTypes.func,
    countries: React.PropTypes.array,
  };

  render() {
    const { handleSubmit, countries } = this.props;

    const renderField = ({ input, label, type, meta: { error, touched }, ...props }) => {
      const uuid = uuidV4();
      return (
        <div className={classNames('form-group', { 'has-danger': touched && error })}>
          <label htmlFor={uuid}>{label}</label>
          <input id={uuid} {...input} placeholder={label} {...props} type={type} />
        </div>
      );
    };

    return (
      <form onSubmit={handleSubmit} className="row buy-step">
        <div className="col-12 text-center">
          <div className="heading heading--mod-bottom mb-5" data-reveal="true">
            <h1 className="heading__title"><span>Billing Address</span></h1>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <Field component={renderField} name="firstName" type="text" className="form-control" label="First Name" />
        </div>
        <div className="col-12 col-md-6">
          <Field component={renderField} name="lastName" type="text" className="form-control" label="Last Name" />
        </div>
        <div className="col-12 col-md-6">
          <Field component={renderField} name="company" type="text" className="form-control" label="Company" />
        </div>
        <div className="col-12 col-md-6">
          <Field component={renderField} name="address" type="text" className="form-control" label="Address" />
        </div>
        <div className="col-12 col-md-6">
          <Field component={renderField} name="zipCode" type="text" className="form-control" label="Zip Code" />
        </div>
        <div className="col-12 col-md-6">
          <Field component={renderField} name="city" type="text" className="form-control" label="City" />
        </div>
        <div className="col-12 col-md-6">
          <Field component={renderField} name="countryProvince" type="text" className="form-control" label="Country / Province" />
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="countrySelectBox">Country</label>
            <Select className="form-control" id="countrySelectBox" aria-describedby="emailHelp">
              {
                countries.map((country) =>
                  <option value={country.code} key={country.uid}>{country.name}</option>
                )
              }
            </Select>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <Field component={renderField} name="telephone" type="text" className="form-control" label="Telephone" />
        </div>
        <div className="col-12 col-md-6">
          <Field component={renderField} name="telephoneAlternative" type="text" className="form-control" label="Telephone alternative" />
        </div>
        <div className="col-12 col-md-8 mt-5 mb-5 text-center">
          <button type="submit" className="btn text-uppercase">proceed to shipping and payment</button>
        </div>
      </form>
    );
  }

}

export default reduxForm({
  form: 'orderStepOne',
})(LoginForm);

