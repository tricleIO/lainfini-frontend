import { call, put, takeLatest, select } from 'redux-saga/effects';
import { SAVE_TOKEN, INIT_APP } from './constants';
import { saveUser, saveToken } from './actions';

import { push } from 'react-router-redux';

import config from 'config';

import request from 'utils/request';

import formUrlEncoded from 'form-urlencoded';

import {
  makeSelectToken,
} from './selectors';

export function* getUser(action) {
  if (action.token.access_token) {
    const requestURL = config.apiUrl + 'customers/current';
    const options = {
      headers: {
        Authorization: action.token.token_type + ' ' + action.token.access_token,
        'Content-Type': 'application/json',
      },
    };

    try {
      // Call our request helper (see 'utils/request')
      const products = yield call(request, requestURL, options);
      yield put(saveUser(products));
      yield put(push('/catalog'));
    } catch (err) {
      yield put(saveToken({}));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* userData() {
  yield takeLatest(SAVE_TOKEN, getUser);
}

export function* initApp() {
  const initToken = (yield select(makeSelectToken())).toJS();
  if (initToken.refresh_token) {
    const data = {
      grant_type: 'refresh_token',
      refresh_token: initToken.refresh_token,
    };
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
      yield put(saveToken(token));
    } catch (err) {
      yield put(saveToken({}));
    }
  }
}

export function* initAppData() {
  yield takeLatest(INIT_APP, initApp);
}

// Bootstrap sagas
export default [
  userData,
  initAppData,
];
