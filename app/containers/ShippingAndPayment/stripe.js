import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'react-router-redux';
import { reduxForm, Field, Form } from 'redux-form/immutable';
import $ from 'jquery';
import OverlayLoader from 'react-overlay-loading/lib/OverlayLoader';

import { makeSelectOrder, makeSelectStripeLoader } from './selectors';

import { sendStripePayment } from './actions';

class PayByStripe extends React.Component {

  static propTypes = {
    order: React.PropTypes.object,
    redirectNoOrder: React.PropTypes.func,
    handleSubmit: React.PropTypes.func,
    valid: React.PropTypes.bool,
    stripeLoading: React.PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {
      cardNumber1: '',
      cardNumber2: '',
      cardNumber3: '',
      cardNumber4: '',
      cardCCV: '',
      cardHolder: '',
      cardExpirationMonth: '',
      cardExpirationYear: '',
    };
  }

  componentWillMount() {
    if (!this.props.order) {
      this.props.redirectNoOrder();
    }
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.props.valid) {
      const formData = decodeURIComponent($(e.target).serialize());
      const data = {};
      formData.split('&').forEach((val) => {
        const split = val.split('=');
        data[split[0]] = split[1];
      });
      data.cardNumber = data.cardNumber1 + data.cardNumber2 + data.cardNumber3 + data.cardNumber4;
      this.props.handleSubmit(data);
    }
  }

  render() {
    const { order, stripeLoading } = this.props;

    const maxLength4 = (value) => value && value.length > 4 ? true : undefined;

    return (
      <Form className="user-card" onSubmit={(e, val) => this.onSubmit(e, val)}>
        <Helmet title="Order: Pay with card" />
        {this.props.order &&
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="order-info">
                  <h2>Payment and order info</h2>
                  <ul>
                    <li>Price: {order.totalPrice}$</li>
                    <li>Shipping price: {order.shipping.price}$</li>
                    <li>Total price: {order.totalPriceWithShipping}$</li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="checkout" style={{ zIndex: stripeLoading ? -1 : 1 }}>
                  <div className="credit-card-box">
                    <div className="flip">
                      <div className="front">
                        <div className="chip" />
                        <div className="logo">


                        </div>
                        <div className="number">
                          {this.state.cardNumber1} {this.state.cardNumber2} {this.state.cardNumber3} {this.state.cardNumber4}
                        </div>
                        <div className="card-holder">
                          <label>Card holder</label>
                          <div>{this.state.cardHolder}</div>
                        </div>
                        <div className="card-expiration-date">
                          <label>Expires</label>
                          <div>{this.state.cardExpirationMonth} / {this.state.cardExpirationYear}</div>
                        </div>
                      </div>
                      <div className="back">
                        <div className="strip" />
                        <div className="logo">


                        </div>
                        <div className="ccv">
                          <label>CCV</label>
                          <div>{this.state.cardCCV}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form">
                    <fieldset>
                      <label htmlFor="card-number">Card Number</label>
                      <Field validate={[maxLength4]} component="input" name="cardNumber1" type="number" id="card-number" className="input-cart-number" onChange={(e) => { if (e.target.value.length >= 4) { $('input#card-number-1').focus(); } this.setState({ cardNumber1: e.target.value }); }} ref={(c) => { this.cardNumber1 = c; }} maxLength={4} />
                      <Field validate={[maxLength4]} component="input" name="cardNumber2" type="number" id="card-number-1" className="input-cart-number" onChange={(e) => { if (e.target.value.length >= 4) { $('input#card-number-2').focus(); } this.setState({ cardNumber2: e.target.value }); }} ref={(c) => { this.cardNumber2 = c; }} maxLength={4} />
                      <Field validate={[maxLength4]} component="input" name="cardNumber3" type="number" id="card-number-2" className="input-cart-number" onChange={(e) => { if (e.target.value.length >= 4) { $('input#card-number-3').focus(); } this.setState({ cardNumber3: e.target.value }); }} ref={(c) => { this.cardNumber3 = c; }} maxLength={4} />
                      <Field validate={[maxLength4]} component="input" name="cardNumber4" type="number" id="card-number-3" className="input-cart-number" onChange={(e) => { if (e.target.value.length >= 4) { $('input#card-holder').focus(); } this.setState({ cardNumber4: e.target.value }); }} ref={(c) => { this.cardNumber4 = c; }} maxLength={4} />
                    </fieldset>
                    <fieldset>
                      <label htmlFor="card-holder">Card holder</label>
                      <Field component="input" name="cardHolder" type="text" id="card-holder" onChange={(e) => this.setState({ cardHolder: e.target.value })} />
                    </fieldset>
                    <fieldset className="fieldset-expiration">
                      <label htmlFor="card-expiration-month">Expiration date</label>
                      <div className="select">
                        <Field component="select" name="cardExpirationMonth" id="card-expiration-month" onChange={(e) => this.setState({ cardExpirationMonth: e.target.value })}>
                          <option />
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </Field>
                      </div>
                      <div className="select">
                        <Field component="select" name="cardExpirationYear" id="card-expiration-year" onChange={(e) => this.setState({ cardExpirationYear: e.target.value })}>
                          <option />
                          <option>2016</option>
                          <option>2017</option>
                          <option>2018</option>
                          <option>2019</option>
                          <option>2020</option>
                          <option>2021</option>
                          <option>2022</option>
                          <option>2023</option>
                          <option>2024</option>
                          <option>2025</option>
                        </Field>
                      </div>
                    </fieldset>
                    <fieldset className="fieldset-ccv">
                      <label htmlFor="card-ccv">CCV</label>
                      <Field component="input" name="cardCCV" type="number" id="card-ccv" maxLength={3} onChange={(e) => this.setState({ cardCCV: e.target.value })} />
                    </fieldset>
                    <button type="submit" className="btn"><i className="fa fa-lock" />Pay</button>
                  </div>
                </div>
              </div>
            </div>
        }
      </Form>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  order: makeSelectOrder(),
  stripeLoading: makeSelectStripeLoader(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (values) => dispatch(sendStripePayment(values)),
    redirectNoOrder: () => dispatch(push('/catalog')),
  };
}

const form = reduxForm({
  form: 'payByStripe',
})(PayByStripe);

export default connect(mapStateToProps, mapDispatchToProps)(form);
