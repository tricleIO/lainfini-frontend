import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {page}
 *
 * @return {object}    An action object with a type of LOAD_PRODUCTS
 */
export function loginUser(email, password) {
  return {
    type: LOGIN_USER,
    email,
    password,
  };
}

export function loginUserSuccess() {
  return {
    type: LOGIN_USER_SUCCESS,
  };
}

export function loginUserError(error) {
  return {
    type: LOGIN_USER_ERROR,
    error,
  };
}
