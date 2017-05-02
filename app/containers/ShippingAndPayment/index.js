import React from 'react';
import Helmet from 'react-helmet';
import { reduxForm, Field } from 'redux-form/immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';
import uuidV4 from 'uuid/v4';
import { push } from 'react-router-redux';
import _ from 'lodash';

import { makeSelectBillingAddress, makeSelectCountries } from 'containers/Order/selectors';
import { loadPaymentMethods, loadShippingMethods, saveOrder } from './actions';
import { makeSelectPaymentMethods, makeSelectShippingMethods, makeSelectLoading } from './selectors';

import Select from 'components/Select';
import SocialNav from 'components/SocialNav';

class ShippingAndPaymentForm extends React.Component {

  static propTypes = {
    isLoading: React.PropTypes.bool,
    billingAddress: React.PropTypes.object,
    countries: React.PropTypes.array,
    goToOrder: React.PropTypes.func,
    handleSubmit: React.PropTypes.func,
    initialize: React.PropTypes.func,
    loadPaymentMethods: React.PropTypes.func,
    loadShippingMethods: React.PropTypes.func,
    shippingMethods: React.PropTypes.array,
    paymentMethods: React.PropTypes.array,
  };

  componentWillMount() {
    const { billingAddress, initialize, goToOrder } = this.props;
    if (!billingAddress) {
      goToOrder();
    } else {
      initialize(billingAddress);
      this.props.loadPaymentMethods(billingAddress.country);
      this.props.loadShippingMethods(billingAddress.country);
    }
  }

  onCountryChange(event, newValue) {
    this.props.loadShippingMethods(newValue);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit();
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
    const { billingAddress, countries, shippingMethods, paymentMethods, isLoading } = this.props;

    return (
      <form onSubmit={(event, values) => this.onSubmit(event, values)}>
        <Helmet title="Order: Shipping and Payment" />
        {billingAddress && !isLoading &&
          <div className="payment">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="heading heading--mod-middle" data-reveal="true">
                    <h2 className="heading__title pb-4"><span>Final steps</span></h2>
                    <div className="heading__subtitle mod-line pt-5"><span>Shipping Address</span></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <Field component={this.renderField} name="firstName" type="text" className="form-control" label="First Name" />
                </div>
                <div className="col-12 col-md-6">
                  <Field component={this.renderField} name="lastName" type="text" className="form-control" label="Last Name" />
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
                    <Field component={Select} defaultValue={billingAddress.country} onChange={(event, newValue) => this.onCountryChange(event, newValue)} className="form-control select-search-inside" id="countrySelectBox" name="country" aria-describedby="emailHelp">
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
                {shippingMethods &&
                  <div className="col-12 text-center mt-5">
                    <h2>Shipping Methods</h2>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="form-group" style={_(shippingMethods).size() === 1 ? { display: 'none' } : {}}>
                          <label htmlFor="paymentSelectBox">Select shipping method</label>
                          <Field component={Select} defaultValue={shippingMethods[0].uid} className="form-control" id="paymentSelectBox" name="shippingMethod" aria-describedby="emailHelp">
                            {
                              shippingMethods.map((shippingMethod) =>
                                <option value={shippingMethod.uid} key={shippingMethod.uid}>{shippingMethod.price > 0 && '(+' + shippingMethod.price + '$)'} {shippingMethod.name}</option>
                              )
                            }
                          </Field>
                        </div>
                        {_(shippingMethods).size() === 1 &&
                          <div className="form-group">
                            Your shipping method: {shippingMethods[0].name} for {shippingMethods[0].price}$
                          </div>
                        }
                      </div>
                      <div className="col-12 col-md-6">
                        <p>
                          Delivery Info: Working days are Monday to Friday, not including holidays.
                        </p>
                        <p>
                          Delivery Time: 3-5 Days
                        </p>
                      </div>
                    </div>
                  </div>
                }
                <div className="col-3 mt-4 mb-4">
                  <hr className="hr-blue" />
                </div>
                <div className="col-12 text-center mb-5">
                  <h3>Payment Method</h3>
                  <p>
                    You are making your purchase on a secure server We guarantee the highest security level for every purchase.
                  Payment and delivery data are collected through the most technologically advanced codification systems (SSL)
                  and our Online Store uses a Geotrust secure server and a Trustwave certificate to ensure maximum protection.
                  </p>
                </div>
                <div className="col-12 mb-4 payment--method">
                  {_(paymentMethods).find({ value: 'CARD' }) &&
                    <label htmlFor="paymentCards" className="custom-control custom-radio mb-4 mb-sm-0">
                      <Field component="input" value="CARD" name="paymentMethod" id="paymentCards" type="radio" className="custom-control-input" />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description">
                        <img src="data:image/png;base64,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" alt="credit cards" />
                      </span>
                    </label>
                  }
                  {_(paymentMethods).find({ value: 'PAYPAL' }) &&
                    <label htmlFor="paypalMethod" className="custom-control custom-radio mb-4 mb-sm-0">
                      <Field component="input" value="PAYPAL" id="paypalMethod" name="paymentMethod" type="radio" className="custom-control-input" />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description">
                        <img src="data:image/png;base64,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" alt />
                      </span>
                    </label>
                  }
                  {_(paymentMethods).find({ value: 'APPLE_PAY' }) && window.ApplePaySession && window.ApplePaySession.canMakePayments() &&
                    <label htmlFor="applePayMethod" className="custom-control custom-radio mb-4 mb-sm-0">
                      <Field component="input" value="APPLE_PAY" id="applePayMethod" name="paymentMethod" type="radio" className="custom-control-input" />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description">
                        <img src="data:image/png;base64,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" alt />
                      </span>
                    </label>
                  }
                </div>
                <div className="col-12 col-md-6 col-lg-3 mt-5 mb-5 text-center">
                  <button type="submit" className="btn text-uppercase">proceed</button>
                </div>
              </div>
            </div>
          </div>
        }
        <SocialNav links />
      </form>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoading(),
  billingAddress: makeSelectBillingAddress(),
  countries: makeSelectCountries(),
  shippingMethods: makeSelectShippingMethods(),
  paymentMethods: makeSelectPaymentMethods(),
});

export function mapDispatchToProps(dispatch) {
  return {
    goToOrder: () => dispatch(push('/order')),
    loadPaymentMethods: () => dispatch(loadPaymentMethods()),
    loadShippingMethods: (country) => dispatch(loadShippingMethods(country)),
    onSubmit: (values) => dispatch(saveOrder(values)),
  };
}

const form = reduxForm({
  form: 'orderStepTwo',
})(ShippingAndPaymentForm);

export default connect(mapStateToProps, mapDispatchToProps)(form);
