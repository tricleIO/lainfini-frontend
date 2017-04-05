import { call, put, takeLatest, select } from 'redux-saga/effects';
import { LOAD_SHIPPING_METHODS, LOAD_PAYMENT_METHODS, SAVE_ORDER } from './constants';
import { savePaymentMethods, saveShippingMethods, paymentMethodsError, shippingMethodsError, orderSaved } from './actions';
import config from 'config';
import { push } from 'react-router-redux';

import {
  makeSelectToken,
  makeSelectCart,
} from 'containers/App/selectors';

import { makeSelectBillingAddress } from 'containers/Order/selectors';

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
      yield put(push('/order/pay/stripe'));
    }
  } catch (err) {
    console.log(err);
  }
}

function* saveOrderData() {
  yield takeLatest(SAVE_ORDER, saveOrder);
}

export default [
  getShippingData,
  getPaymentData,
  saveOrderData,
];
