import {
  LOAD_PAYMENT_METHODS,
  LOAD_SHIPPING_METHODS,
  LOAD_PAYMENT_METHODS_SUCCESS,
  LOAD_SHIPPING_METHODS_SUCCESS,
  LOAD_PAYMENT_METHODS_ERROR,
  LOAD_SHIPPING_METHODS_ERROR,
  SAVE_ORDER,
  SAVE_ORDER_SUCCESS,
  SEND_STRIPE_PAYMENT,
  STRIPE_LOADER_SET_STATE,
} from './constants';

export function loadPaymentMethods(country) {
  return {
    type: LOAD_PAYMENT_METHODS,
    country,
  };
}

export function loadShippingMethods(country) {
  return {
    type: LOAD_SHIPPING_METHODS,
    country,
  };
}

export function savePaymentMethods(methods) {
  return {
    type: LOAD_PAYMENT_METHODS_SUCCESS,
    methods,
  };
}

export function saveShippingMethods(methods) {
  return {
    type: LOAD_SHIPPING_METHODS_SUCCESS,
    methods,
  };
}

export function paymentMethodsError(error) {
  return {
    type: LOAD_PAYMENT_METHODS_ERROR,
    error,
  };
}

export function shippingMethodsError(error) {
  return {
    type: LOAD_SHIPPING_METHODS_ERROR,
    error,
  };
}

export function saveOrder(order) {
  return {
    type: SAVE_ORDER,
    order,
  };
}

export function orderSaved(order) {
  return {
    type: SAVE_ORDER_SUCCESS,
    order,
  };
}

export function sendStripePayment(card) {
  return {
    type: SEND_STRIPE_PAYMENT,
    card,
  };
}

export function setStripeLoader(state) {
  return {
    type: STRIPE_LOADER_SET_STATE,
    state,
  };
}
