import { fromJS } from 'immutable';

import {
  LOAD_ARRIVALS,
  LOAD_ARRIVALS_SUCCESS,
  LOAD_ARRIVALS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  products: {},
});

function eshopReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ARRIVALS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_ARRIVALS_SUCCESS:
      return state
        .set('products', action.products)
        .set('loading', false);
    case LOAD_ARRIVALS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default eshopReducer;
