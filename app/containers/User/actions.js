import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REQUEST_PASSWORD,
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

export function registerUser(email, fullname, password) {
  const name = fullname.split(' ');
  const firstName = name[0];
  const lastName = name[1];
  return {
    type: REGISTER_USER,
    email,
    password,
    firstName,
    lastName,
  };
}

export function registerUserError(error) {
  return {
    type: REGISTER_USER_ERROR,
    error,
  };
}

export function requestPassword(email, redirect = true) {
  return {
    type: REQUEST_PASSWORD,
    email,
    redirect,
  };
}
