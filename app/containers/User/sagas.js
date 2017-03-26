import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOGIN_USER } from './constants';
import { loginUserSuccess, loginUserError } from './actions';
import { saveToken } from 'containers/App/actions';

import formUrlEncoded from 'form-urlencoded';

import config from 'config';

import request from 'utils/request';

export function* getProduct(action) {
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
    yield put(loginUserError(err.toString()));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* productsData() {
  const watcher = yield takeLatest(LOGIN_USER, getProduct);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  productsData,
];
