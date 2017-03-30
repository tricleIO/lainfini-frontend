import { fromJS } from 'immutable';

import {
  GET_FAQ,
  GET_FAQ_SUCCESS,
  GET_FAQ_ERROR,
} from './constants';

const initialState = fromJS({
  data: null,
  error: false,
  loading: false,
});

function faqReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FAQ:
      return state
        .set('loading', true)
        .set('error', false)
        .set('data', {});
    case GET_FAQ_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('data', action.data);
    case GET_FAQ_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)
        .set('data', null);
    default:
      return state;
  }
}

export default faqReducer;
