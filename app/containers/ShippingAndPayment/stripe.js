import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'react-router-redux';
import { reduxForm, Field, Form } from 'redux-form/immutable';
import $ from 'jquery';

import { makeSelectOrder, makeSelectStripeLoader } from './selectors';

import { sendStripePayment, initBraintreePayment } from './actions';

class PayByStripe extends React.Component {

  static propTypes = {
    order: React.PropTypes.object,
    redirectNoOrder: React.PropTypes.func,
    handleSubmit: React.PropTypes.func,
    valid: React.PropTypes.bool,
    stripeLoading: React.PropTypes.bool,
    initBraintreePayment: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
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

  componentDidMount() {
    this.props.initBraintreePayment(this.form, this.submit, this.props.order.uid);
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

    return (
      <form className="user-card" ref={(c) => { this.form = c; }}>
        <Helmet title="Order: Pay with card" />
        { this.props.order &&
          <div className="row">
            <div className="col-12 col-sm-12 text-center">
              <div className="order-info">
                <h2>Payment and order info</h2>
                <div className="order-info__table">
                  <div className="order-info__table-item">
                    <span>Price:&nbsp;</span> <span className="text-right">{order.totalPrice}$</span>
                  </div>
                  <div className="order-info__table-item">
                    <span>Shipping price:&nbsp;</span> <span className="text-right">{order.shipping.price}$</span>
                  </div>
                  <div className="order-info__table-item">
                    <span>Total price:&nbsp;</span> <span className="text-right">{order.totalPriceWithShipping}$</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12">
              <div className="checkout" style={{ zIndex: stripeLoading ? -1 : 1 }}>
                <div className="credit-card-box">
                  <div className="flip">
                    <div className="front">
                      <div className="chip" />
                      <div className="logo">


                      </div>
                      <div className="number">
                        {this.state.cardNumber.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()}
                      </div>
                      <div className="card-holder">
                        <label>Card holder</label>
                        <div>{this.state.cardHolder}</div>
                      </div>
                      <div className="card-expiration-date">
                        <label>Expires</label>
                        <div>{this.state.cardExpirationDate}</div>
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
                    <div className="form-group">
                      <label htmlFor="card-number">Card Number</label>
                      <div className="content card-number">
                        <input value={this.state.cardNumber} type="text" name="cardNumber" id="card-number" className="input-cart-number form-control" onChange={(e) => this.setState({ cardNumber: e.target.value })} maxLength={16} />
                        {/*
                        <Field validate={[maxLength4, isNumber]} component="input" name="cardNumber1" type="text" id="card-number" className="input-cart-number form-control" onChange={(e) => { if (e.target.value.length >= 4) { $('input#card-number-1').focus(); } this.setState({ cardNumber1: e.target.value }); }} ref={(c) => { this.cardNumber1 = c; }} maxLength={4} />
                        <Field validate={[maxLength4, isNumber]} component="input" name="cardNumber2" type="text" id="card-number-1" className="input-cart-number form-control" onChange={(e) => { if (e.target.value.length >= 4) { $('input#card-number-2').focus(); } this.setState({ cardNumber2: e.target.value }); }} ref={(c) => { this.cardNumber2 = c; }} maxLength={4} />
                        <Field validate={[maxLength4, isNumber]} component="input" name="cardNumber3" type="text" id="card-number-2" className="input-cart-number form-control" onChange={(e) => { if (e.target.value.length >= 4) { $('input#card-number-3').focus(); } this.setState({ cardNumber3: e.target.value }); }} ref={(c) => { this.cardNumber3 = c; }} maxLength={4} />
                        <Field validate={[maxLength4, isNumber]} component="input" name="cardNumber4" type="text" id="card-number-3" className="input-cart-number form-control" onChange={(e) => { if (e.target.value.length >= 4) { $('input#card-holder').focus(); } this.setState({ cardNumber4: e.target.value }); }} ref={(c) => { this.cardNumber4 = c; }} maxLength={4} />
                        */}
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <div className="form-group">
                      <label htmlFor="card-holder">Card holder</label>
                      <input name="cardHolder" className="form-control" type="text" id="card-holder" onChange={(e) => this.setState({ cardHolder: e.target.value })} />
                    </div>
                  </fieldset>
                  <fieldset className="fieldset-expiration">
                    <div className="form-group">
                      <label htmlFor="card-expiration-month">Expiration date</label>
                      <input type="text" name="expirationDate" id="expiration-date" className="form-control" maxLength={7} onChange={(e) => this.setState({ cardExpirationDate: e.target.value })} />
                    </div>
                  </fieldset>
                  <fieldset className="fieldset-ccv">
                    <div className="form-group">
                      <label htmlFor="card-ccv">CCV</label>
                      <input name="cardCCV" type="text" className="form-control" id="card-ccv" maxLength={3} onChange={(e) => this.setState({ cardCCV: e.target.value })} />
                    </div>
                  </fieldset>
                  <button type="submit" className="btn" disabled="true" ref={(c) => { this.submit = c; }}><i className="fa fa-lock" />Pay</button>
                </div>
              </div>
            </div>
          </div>
        }
      </form>
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
    initBraintreePayment: (form, submit) => dispatch(initBraintreePayment(form, submit, dispatch)),
  };
}

const form = reduxForm({
  form: 'payByStripe',
})(PayByStripe);

export default connect(mapStateToProps, mapDispatchToProps)(form);
