import { fromJS } from 'immutable';

import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
  SELECT_FILTER_MATERIAL,
  SELECT_FILTER_SIZE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  products: {},
  filterBySize: -1,
  filterByMaterial: -1,
});

function eshopReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_FILTER_MATERIAL:
      return state
        .set('filterByMaterial', action.material);
    case SELECT_FILTER_SIZE:
      return state
        .set('filterBySize', action.size);
    case LOAD_PRODUCTS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_PRODUCTS_SUCCESS:
      return state
        .set('products', action.products)
        .set('loading', false);
    case LOAD_PRODUCTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default eshopReducer;
