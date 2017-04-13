import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOGIN_USER, REGISTER_USER, REQUEST_PASSWORD, LOGIN_FACEBOOK } from './constants';
import { loginUserSuccess, loginUserError, registerUserError } from './actions';
import { saveToken, logout, addNotification } from 'containers/App/actions';
import { OAuth2 } from 'oauth';

import formUrlEncoded from 'form-urlencoded';

import config from 'config';

import request from 'utils/request';

export function* getLogin(action) {
  const data = {
    username: action.email,
    password: action.password,
    grant_type: 'password',
  };

  // Select username from store
  const requestURL = config.apiUrl + 'oauth/token';

  try {
    // Call our request helper (see 'utils/request')
    const token = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa('clientapp:123456'),
      },
      cors: true,
      body: formUrlEncoded(data),
    });
    yield put(loginUserSuccess());
    yield put(saveToken(token));
  } catch (err) {
    yield put(logout());
    const errorMessage = err.response.status === 400 ? 'You have passed invalid creditals. Please try it again, or create new account.' : '';
    yield put(addNotification({
      title: 'Error',
      level: 'error',
      message: errorMessage,
    }));
    yield put(loginUserError(errorMessage));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* loginData() {
  const watcher = yield takeLatest(LOGIN_USER, getLogin);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* getRegister(action) {
  const data = {
    username: action.email,
    password: action.password,
    firstName: action.firstName,
    lastName: action.lastName,
  };
  const requestURL = config.apiUrl + 'customers';
  try {
    // Call our request helper (see 'utils/request')
    const register = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cors: true,
      body: JSON.stringify(data),
    });
    if (register.code === 200) {
      const message = "You've been successfully registered. We sent you an activation email. After activation you can use your account.";
      yield put(addNotification({
        title: 'Success',
        level: 'success',
        message,
      }));
    } else if (register.code === 409) {
      yield put(registerUserError('This email is taken, you can try to log in. Or you can request new password!'));
    } else {
      throw new Error();
    }
  } catch (err) {
    const errorMessage = 'There was an error, please try it again.';
    yield put(addNotification({
      title: 'Error',
      level: 'error',
      message: errorMessage,
    }));
  }
}

export function* registerData() {
  yield takeLatest(REGISTER_USER, getRegister);
}

export function* requestPassword(action) {
  const data = {
    email: action.email,
  };
  const requestURL = config.apiUrl + 'users/password-reset';

  try {
    yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cors: true,
      body: JSON.stringify(data),
    });
  } catch (err) {
    const errorMessage = 'Your email has not been found in our database';
    yield put(addNotification({
      title: 'Error',
      level: 'error',
      message: errorMessage,
    }));
  }
}

export function* requestPasswordData() {
  yield takeLatest(REQUEST_PASSWORD, requestPassword);
}

export function* loginWithFacebook() {
  const facebookOAuth = new OAuth2(
    config.facebookAppId,
    config.facebookAppSecret,
    'https://www.facebook.com/',
    'v2.8/dialog/oauth',
    'v2.8/oauth/access_token',
    null
  );
  console.log(facebookOAuth.getAuthorizeUrl({
    redirect_uri: 'http://localhost:3000/login/facebook',
    scope: ['public_profile', 'email', 'user_friends', 'user_about_me'],
  }));
}

export function* loginWithFacebookData() {
  const watcher = yield takeLatest(LOGIN_FACEBOOK, loginWithFacebook);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  loginData,
  registerData,
  requestPasswordData,
  loginWithFacebookData,
];
