import { fromJS } from 'immutable';

import {
  LOAD_ARRIVALS,
  LOAD_ARRIVALS_SUCCESS,
  LOAD_ARRIVALS_ERROR,
  LOAD_LETS_GET_INSPIRED,
  LOAD_LETS_GET_INSPIRED_ERROR,
  LOAD_LETS_GET_INSPIRED_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  products: {},
  inspiredLoading: false,
  inspiredError: false,
  inspiredProducts: {},
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
    case LOAD_LETS_GET_INSPIRED:
      return state
        .set('inspiredLoading', true)
        .set('inspiredError', false);
    case LOAD_LETS_GET_INSPIRED_SUCCESS:
      return state
        .set('inspiredProducts', action.products)
        .set('inspiredLoading', false);
    case LOAD_LETS_GET_INSPIRED_ERROR:
      return state
        .set('inspiredError', action.error)
        .set('inspiredLoading', false);
    default:
      return state;
  }
}

export default eshopReducer;
