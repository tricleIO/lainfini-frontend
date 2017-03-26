import { call, put, takeLatest, select, take, cancel } from 'redux-saga/effects';
import { SAVE_TOKEN, INIT_APP, SAVE_USER } from './constants';
import { saveUser, saveToken, logout, saveWishlist, saveCart } from './actions';

import { push, LOCATION_CHANGE } from 'react-router-redux';

import config from 'config';

import request from 'utils/request';

import formUrlEncoded from 'form-urlencoded';

import {
  makeSelectToken,
  makeSelectCart,
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

export function* getWishlist(action) {
  if (action.user.uid) {
    const token = yield select(makeSelectToken());

    const requestURL = config.apiUrl + 'customers/' + action.user.uid + '/wishlist';
    const options = {
      headers: {
        Authorization: token.token_type + ' ' + token.access_token,
        'Content-Type': 'application/json',
      },
    };

    try {
      // Call our request helper (see 'utils/request')
      const wishlist = (yield call(request, requestURL, options)).content;
      yield put(saveWishlist(wishlist));
    } catch (err) {
      console.log(err);
    }
  }
}

export function* getWishlistData() {
  yield takeLatest(SAVE_USER, getWishlist);
}

export function* getCart(action) {
  const cartInState = yield select(makeSelectCart());
  if (action.user.uid && !cartInState) {
    const token = yield select(makeSelectToken());

    const requestURL = config.apiUrl + 'carts/current';
    const options = {
      headers: {
        Authorization: token.token_type + ' ' + token.access_token,
        'Content-Type': 'application/json',
      },
    };

    try {
      // Call our request helper (see 'utils/request')
      const cart = yield call(request, requestURL, options);
      yield put(saveCart(cart));
    } catch (err) {
      console.log(err);
    }
  }
}

export function* getCartData() {
  yield takeLatest(SAVE_USER, getCart);
}

// Bootstrap sagas
export default [
  userData,
  initAppData,
  getWishlistData,
  getCartData,
];
