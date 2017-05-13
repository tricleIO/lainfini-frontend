import React from 'react';
import { reduxForm, Field, change } from 'redux-form/immutable';
import uuidV4 from 'uuid/v4';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from 'containers/App/selectors';

import Select from 'components/Select';

class LoginForm extends React.Component {

  static propTypes = {
    handleSubmit: React.PropTypes.func,
    countries: React.PropTypes.array,
    user: React.PropTypes.object,
    initialize: React.PropTypes.func, // eslint-disable-line
    changeFieldValue: React.PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.firstNameEdited = false;
    this.lastNameEdited = false;
  }

  componentWillMount() {
    this.setUpForm();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.uid !== this.props.user.uid) {
      this.setUpForm(nextProps);
    }
  }

  setUpForm(nextProps) {
    const { initialize, user } = nextProps || this.props;
    if (user.uid) {
      initialize({
        firstName: user.firstName,
        lastName: user.lastName,
        telephone: user.phoneCode || user.phoneNumber ? user.phoneCode + user.phoneNumber : '',
      });
    }
  }

  handleSubmit(values) {
    this.props.handleSubmit(values);
  }

  renderField({ input, label, type, meta: { error, touched }, ...props }) {
    const uuid = uuidV4();
    return (
      <div className={classNames('form-group', { 'has-danger': touched && error })}>
        <label htmlFor={uuid}>{label}</label>
        <input id={uuid} {...input} placeholder={label} {...props} type={type} />
      </div>
    );
  }

  render() {
    const { countries, user } = this.props;

    return (
      <form onSubmit={(values) => this.handleSubmit(values)}>
        {!user.uid &&
          <div className="row buy-step offset-vertical-40">
            <div className="col-12">
              <div className="col-12 col-md-6">
                <Field component={this.renderField} name="firstNameUnlogged" type="text" className="form-control" onChange={(event, newValue) => { if (!this.firstNameEdited) this.props.changeFieldValue('firstName', newValue); }} label="First Name" />
              </div>
              <div className="col-12 col-md-6">
                <Field component={this.renderField} name="lastNameUnlogged" type="text" className="form-control" onChange={(event, newValue) => { if (!this.lastNameEdited) this.props.changeFieldValue('lastName', newValue); }} label="Last Name" />
              </div>
              <div className="col-12 col-md-12">
                <Field component={this.renderField} name="emailUnlogged" type="text" className="form-control" label="Email" />
              </div>
            </div>
          </div>
        }
        <div className="row buy-step">
          <div className="col-12">
            <div className="col-12 text-center">
              <div className="heading heading--mod-bottom mb-5" data-reveal="true">
                <h1 className="heading__title"><span>Billing Address</span></h1>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <Field component={this.renderField} name="firstName" type="text" className="form-control" onChange={() => { this.firstNameEdited = true; }} label="First Name" />
            </div>
            <div className="col-12 col-md-6">
              <Field component={this.renderField} name="lastName" type="text" className="form-control" onChange={() => { this.lastNameEdited = true; }} label="Last Name" />
            </div>
            <div className="col-12 col-md-6">
              <Field component={this.renderField} name="company" type="text" className="form-control" label="Company" />
            </div>
            <div className="col-12 col-md-6">
              <Field component={this.renderField} name="address" type="text" className="form-control" label="Address" />
            </div>
            <div className="col-12 col-md-6">
              <Field component={this.renderField} name="zipCode" type="text" className="form-control" label="Zip Code" />
            </div>
            <div className="col-12 col-md-6">
              <Field component={this.renderField} name="city" type="text" className="form-control" label="City" />
            </div>
            <div className="col-12 col-md-6">
              <Field component={this.renderField} name="countryProvince" type="text" className="form-control" label="Country / Province" />
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="countrySelectBox">Country</label>
                <Field component={Select} className="form-control select-search-inside" id="countrySelectBox" name="country" aria-describedby="emailHelp">
                  {
                    countries.map((country) =>
                      <option value={country.code} key={country.uid}>{country.name}</option>
                    )
                  }
                </Field>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <Field component={this.renderField} name="telephone" type="text" className="form-control" label="Telephone" />
            </div>
            <div className="col-12 col-md-6">
              <Field component={this.renderField} name="telephoneAlternative" type="text" className="form-control" label="Telephone alternative" />
            </div>
            <div className="col-12 col-md-12 mt-5 mb-5 text-center">
              <button type="submit" className="btn text-uppercase">proceed to shipping and payment</button>
            </div>
          </div>
        </div>
      </form>
    );
  }

}

const validate = (val) => {
  const values = val.toJS();
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.address) {
    errors.address = 'Required';
  }
  if (!values.zipCode) {
    errors.zipCode = 'Required';
  }
  if (!values.city) {
    errors.city = 'Required';
  }
  if (!values.telephone) {
    errors.telephone = 'Required';
  }
  return errors;
};

const form = reduxForm({
  form: 'orderStepOne',
  validate,
})(LoginForm);

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeFieldValue: (field, value) => dispatch(change('orderStepOne', field, value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(form);
