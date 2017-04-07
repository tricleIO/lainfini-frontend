import { fromJS } from 'immutable';
import {
  LOAD_PAYMENT_METHODS,
  LOAD_PAYMENT_METHODS_SUCCESS,
  LOAD_PAYMENT_METHODS_ERROR,
  LOAD_SHIPPING_METHODS,
  LOAD_SHIPPING_METHODS_SUCCESS,
  LOAD_SHIPPING_METHODS_ERROR,
  SAVE_ORDER,
  SAVE_ORDER_SUCCESS,
  STRIPE_LOADER_SET_STATE,
} from './constants';

const initialState = fromJS({
  loadingShippingMethods: false,
  loadingPaymentMethods: false,
  errorShippingMethods: false,
  errorPaymentMethods: false,
  shippingMethods: undefined,
  paymentMethods: undefined,
  loading: false,
  order: undefined,
  stripeLoader: false,
});

function shippingAndPaymentReducer(state = initialState, action) {
  switch (action.type) {
    case STRIPE_LOADER_SET_STATE:
      return state
        .set('stripeLoader', action.state);
    case SAVE_ORDER_SUCCESS:
      return state
        .set('order', action.order)
        .set('loading', false);
    case SAVE_ORDER:
      return state
        .set('order', undefined)
        .set('loading', true);
    case LOAD_PAYMENT_METHODS:
      return state
        .set('loadingPaymentMethods', true)
        .set('errorPaymentMethods', false)
        .set('paymentMethods', undefined);
    case LOAD_SHIPPING_METHODS:
      return state
        .set('loadingShippingMethods', true)
        .set('errorShippingMethods', false)
        .set('shippingMethods', undefined);
    case LOAD_PAYMENT_METHODS_SUCCESS:
      return state
        .set('loadingPaymentMethods', false)
        .set('paymentMethods', action.methods);
    case LOAD_SHIPPING_METHODS_SUCCESS:
      return state
        .set('loadingShippingMethods', false)
        .set('shippingMethods', action.methods);
    case LOAD_PAYMENT_METHODS_ERROR:
      return state
        .set('loadingPaymentMethods', false)
        .set('errorPaymentMethods', action.error);
    case LOAD_SHIPPING_METHODS_ERROR:
      return state
        .set('loadingShippingMethods', false)
        .set('errorShippingMethods', action.error);
    default:
      return state;
  }
}

export default shippingAndPaymentReducer;
