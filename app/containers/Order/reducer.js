import { fromJS } from 'immutable';
import { LOAD_COUNTRIES_SUCCESS, LOAD_COUNTRIES_ERROR, LOAD_COUNTRIES } from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  countries: null,
});

function orderReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return state
        .set('loading', true)
        .set('countries', null)
        .set('error', false);
    case LOAD_COUNTRIES_SUCCESS:
      return state
        .set('loading', false)
        .set('countries', action.countries);
    case LOAD_COUNTRIES_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default orderReducer;
