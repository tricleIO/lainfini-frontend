import { call, put, takeLatest, select } from 'redux-saga/effects';
import { LOAD_SHIPPING_METHODS, LOAD_PAYMENT_METHODS, SAVE_ORDER, SEND_STRIPE_PAYMENT } from './constants';
import { savePaymentMethods, saveShippingMethods, paymentMethodsError, shippingMethodsError, orderSaved, setStripeLoader } from './actions';
import config from 'config';
import { push } from 'react-router-redux';

import {
  makeSelectToken,
  makeSelectCart,
} from 'containers/App/selectors';

import {
  createCart,
  addNotification,
  addLoading,
  removeLoading,
} from 'containers/App/actions';

import { makeSelectBillingAddress } from 'containers/Order/selectors';

import { makeSelectOrder } from './selectors';

import request from 'utils/request';

function* getShipping(action) {
  const requestURL = config.apiUrl + 'shipping/tariffs?country-code=' + action.country;

  try {
    const shippingMethods = yield call(request, requestURL);
    yield put(saveShippingMethods(shippingMethods.content));
  } catch (err) {
    yield put(shippingMethodsError(err));
  }
}

function* getShippingData() {
  yield takeLatest(LOAD_SHIPPING_METHODS, getShipping);
}

function* getPayment() {
  const requestURL = config.apiUrl + 'payments/methods';

  try {
    const methods = yield call(request, requestURL);
    yield put(savePaymentMethods(methods));
  } catch (err) {
    yield put(paymentMethodsError(err));
  }
}

function* getPaymentData() {
  yield takeLatest(LOAD_PAYMENT_METHODS, getPayment);
}

function* saveOrder(action) {
  yield put(addLoading('saveOrder'));
  const requestURL = config.apiUrl + 'orders';

  const token = yield select(makeSelectToken());
  const cart = yield select(makeSelectCart());
  const order = action.order.toJS();
  const billingAddress = yield select(makeSelectBillingAddress());

  const data = {
    cartUid: cart.uid,
    deliveryAddress: {
      street: order.address,
      city: order.city,
      postal: order.zipCode,
      country: order.country,
    },
    billingAddress: {
      street: billingAddress.address,
      city: billingAddress.city,
      postal: billingAddress.postal,
      country: billingAddress.country,
    },
    paymentMethod: order.paymentMethod,
    shippingTariffUid: order.shippingMethod,
  };

  if (cart.customerUid) {
    data.customerUid = cart.customerUid;
  } else {
    data.customer = {
      firstName: billingAddress.firstNameUnlogged,
      lastName: billingAddress.lastNameUnlogged,
      username: billingAddress.emailUnlogged,
      phoneNumber: order.telephone,
    };
  }

  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  };

  if (token) {
    options.headers.Authorization = token.tokenType + ' ' + token.value;
  }

  try {
    const ordr = yield call(request, requestURL, options);
    yield put(orderSaved(ordr));
    if (order.paymentMethod === 'STRIPE') {
      yield put(push('/order/pay/card'));
    }
  } catch (err) {
    console.log(err);
  }
  yield put(removeLoading('saveOrder'));
}

function* saveOrderData() {
  yield takeLatest(SAVE_ORDER, saveOrder);
}

function* sendStripePayment(action) {
  yield put(addLoading('stripePayment'));
  const requestURL = config.apiUrl + 'payments/stripe';
  const token = yield select(makeSelectToken());
  const order = yield select(makeSelectOrder());

  const data = {
    cardNumber: action.card.cardNumber,
    cvc: action.card.cardCCV,
    monthExpiration: action.card.cardExpirationMonth,
    orderUid: order.uid,
    yearExpiration: action.card.cardExpirationYear,
  };

  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  };

  if (token) {
    options.headers.Authorization = token.tokenType + ' ' + token.value;
  }

  try {
    yield put(setStripeLoader(true));
    const payment = yield call(request, requestURL, options);
    if (payment.referenceCode) {
      yield put(createCart());
      yield put(push({ pathname: '/catalog', state: { successfulPayment: true } }));
    } else {
      yield put(addNotification({
        message: payment.message,
        level: 'error',
      }));
    }
    yield put(setStripeLoader(false));
  } catch (err) {
    console.log(err);
  }
  yield put(removeLoading('stripePayment'));
}

function* sendStripePaymentData() {
  yield takeLatest(SEND_STRIPE_PAYMENT, sendStripePayment);
}

export default [
  getShippingData,
  getPaymentData,
  saveOrderData,
  sendStripePaymentData,
];
