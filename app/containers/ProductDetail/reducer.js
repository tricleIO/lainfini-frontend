import { fromJS } from 'immutable';

import {
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  product: {},
});

function productDetailReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCT:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_PRODUCT_SUCCESS:
      return state
        .set('product', action.product)
        .set('loading', false);
    case LOAD_PRODUCT_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default productDetailReducer;
