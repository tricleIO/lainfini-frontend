import { fromJS } from 'immutable';

import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loadingUser: false,
  errorUser: false,
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return state
        .set('loadingUser', true)
        .set('errorUser', false);
    case LOGIN_USER_SUCCESS:
      return state
        .set('loadingUser', false);
    case LOGIN_USER_ERROR:
      return state
        .set('errorUser', action.error)
        .set('loadingUser', false);
    default:
      return state;
  }
}

export default userReducer;
