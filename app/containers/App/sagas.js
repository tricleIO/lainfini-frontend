import { call, put, takeLatest, select, take, cancel } from 'redux-saga/effects';
import { SAVE_TOKEN, INIT_APP } from './constants';
import { saveUser, saveToken, logout } from './actions';

import { push, LOCATION_CHANGE } from 'react-router-redux';

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
      const user = yield call(request, requestURL, options);
      yield put(saveUser(user, action.fromAppInit));
      if (!action.fromAppInit) {
        yield put(push('/catalog'));
      }
    } catch (err) {
      yield put(logout());
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
      yield put(saveToken(token, true));
    } catch (err) {
      yield put(logout());
    }
  }
}

export function* initAppData() {
  const watcher = yield takeLatest(INIT_APP, initApp);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  userData,
  initAppData,
];
