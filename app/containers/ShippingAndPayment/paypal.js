import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import config from 'config';

import request from 'utils/request';
import braintreeClient from 'braintree-web/client';
import braintreePaypal from 'braintree-web/paypal';

import {
  createCart,
  addNotification,
} from 'containers/App/actions';

import { makeSelectOrder } from './selectors';

class Paypal extends React.Component {

  static propTypes = {
    order: React.PropTypes.object,
    dispatch: React.PropTypes.func,
    redirectNoOrder: React.PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      message: 'We are waiting for you to complete payment on paypal...',
      submessage: 'We will open up paypal window for you, if not shown, check your browser settings.',
    };
  }

  componentWillMount() {
    if (!this.props.order) {
      this.props.redirectNoOrder();
    }
  }

  componentDidMount() {
    if (this.props.order) {
      request(config.apiUrl + 'payments/braintree/token', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }).then((braintreeTokenData) => {
        const braintreeToken = braintreeTokenData.clientToken;

        braintreeClient.create(
          {
            authorization: braintreeToken,
          },
          (clientErr, clientInstance) => {
            braintreePaypal.create({
              client: clientInstance,
            }, (paypalErr, paypalInstance) => {
              if (paypalErr) {
                console.error('Error creating PayPal:', paypalErr);
                return;
              }
              paypalInstance.tokenize({
                flow: 'checkout',
              }, (tokenizeErr, payload) => {
                if (tokenizeErr) {
                  if (tokenizeErr.type !== 'CUSTOMER') {
                    this.props.dispatch(addNotification({
                      message: tokenizeErr,
                      level: 'error',
                    }));
                  }
                  return;
                }
                this.setState({ message: 'We are processing your payment, please wait...', submessage: '' });
                request(config.apiUrl + 'payments/braintree/paypal', {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  method: 'POST',
                  body: JSON.stringify({
                    orderUid: this.props.order.uid,
                    paymentMethodNonce: payload.nonce,
                  }),
                }).then((paymentData) => {
                  if (paymentData.referenceCode) {
                    this.props.dispatch(createCart());
                    this.props.dispatch(push({ pathname: '/catalog', state: { successfulPayment: true } }));
                  }
                });
              });
            });
          });
      });
    }
  }

  render() {
    return (
      <div>
        <div className="loading">
          <div className="absolute">
            <div className="sk-folding-cube" style={{ margin: '0 auto' }}>
              <div className="sk-cube1 sk-cube"></div>
              <div className="sk-cube2 sk-cube"></div>
              <div className="sk-cube4 sk-cube"></div>
              <div className="sk-cube3 sk-cube"></div>
            </div>
            <p className="text-center" style={{ marginTop: '25px' }}>{this.state.message}</p>
            <p className="text-center" style={{ marginTop: '5px' }}>{this.state.submessage}</p>
            <div className="btn__inline offset-vertical-30 text-center">
              <Link to="/catalog" className="btn" data-reveal>back to catalog</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    redirectNoOrder: () => dispatch(push('/catalog')),
    dispatch: (action) => dispatch(action),
  };
}

const mapStateToProps = createStructuredSelector({
  order: makeSelectOrder(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Paypal);
