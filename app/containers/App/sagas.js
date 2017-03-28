import { call, put, takeLatest, select, take, cancel } from 'redux-saga/effects';
import { SAVE_TOKEN, INIT_APP, SAVE_USER, ADD_TO_WISHLIST, DELETE_FROM_WISHLIST, ADD_TO_CART, DELETE_FROM_CART, CREATE_CART, UPDATE_CART_QTY, GET_CURRENT_CART, LOGOUT, GET_CART_ID } from './constants';
import { saveUser, saveToken, logout, saveWishlist, saveCart, createCart, getCart } from './actions';

import localStorage from 'local-storage';

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
  } else if (localStorage('cartUid')) {
    yield put(getCart(localStorage('cartUid')));
  } else {
    yield put(createCart());
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

    const requestURL = config.apiUrl + 'customers/current/wishlist';
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

export function* getCartUser(action) {
  const cartInState = yield select(makeSelectCart());
  if (action.user.uid && !cartInState) {
    localStorage('cartUid', null);
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

export function* getCartUserData() {
  yield takeLatest(SAVE_USER, getCartUser);
}

export function* addToWishlist(action) {
  const token = yield select(makeSelectToken());
  if (token.access_token) {
    const requestURL = config.apiUrl + 'customers/current/wishlist';
    const headers = {
      Authorization: token.token_type + ' ' + token.access_token,
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      productUid: action.uid,
    });

    try {
      // Call our request helper (see 'utils/request')
      yield call(request, requestURL, { headers, method: 'POST', body });

      try {
        // Call our request helper (see 'utils/request')
        const wishlist = (yield call(request, requestURL, { headers })).content;
        yield put(saveWishlist(wishlist));
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export function* addToWishlistData() {
  yield takeLatest(ADD_TO_WISHLIST, addToWishlist);
}

export function* deleteFromWishlist(action) {
  const token = yield select(makeSelectToken());
  if (token.access_token) {
    const requestURL = config.apiUrl + 'customers/current/wishlist/' + action.uid;
    const headers = {
      Authorization: token.token_type + ' ' + token.access_token,
      'Content-Type': 'application/json',
    };

    try {
      // Call our request helper (see 'utils/request')
      yield call(request, requestURL, { headers, method: 'DELETE' });

      try {
        // Call our request helper (see 'utils/request')
        const wishlist = (yield call(request, requestURL, { headers })).content;
        yield put(saveWishlist(wishlist));
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export function* deleteFromWishlistData() {
  yield takeLatest(DELETE_FROM_WISHLIST, deleteFromWishlist);
}

export function* addToCart(action) {
  const token = yield select(makeSelectToken());
  const stateCart = yield select(makeSelectCart());
  const requestURL = token.access_token ? config.apiUrl + 'carts/' + stateCart.uid + '/items' : null;

  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      productUid: action.item,
      quantity: action.qty,
    }),
  };

  if (token) {
    options.headers.Authorization = token.token_type + ' ' + token.access_token;
  }

  try {
    yield call(request, requestURL, options);
    yield put(getCurrentCart());
  } catch (err) {
    console.log(err);
  }
}

export function* addToCartData() {
  yield takeLatest(ADD_TO_CART, addToCart);
}

export function* getCurrentCart() {
  const token = yield select(makeSelectToken());
  const stateCart = yield select(makeSelectCart());

  const options = {
    headers: {
      Authorization: token.token_type + ' ' + token.access_token,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  };

  const requestURLCart = config.apiUrl + 'carts/' + stateCart.uid;

  try {
    // Call our request helper (see 'utils/request')
    const cart = yield call(request, requestURLCart, options);
    yield put(saveCart(cart));
  } catch (err) {
    console.log(err);
  }
}

export function* getCurrentCartData() {
  yield takeLatest(GET_CURRENT_CART, getCurrentCart);
}

export function* updateCartQty(action) {
  const token = yield select(makeSelectToken());
  const stateCart = yield select(makeSelectCart());
  const requestURL = config.apiUrl + 'carts/' + stateCart.uid + '/items';

  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      productUid: action.item,
      quantity: action.qty,
    }),
  };

  if (token) {
    options.headers.Authorization = token.token_type + ' ' + token.access_token;
  }

  try {
    yield call(request, requestURL, options);
    yield put(getCurrentCart());
  } catch (err) {
    console.log(err);
  }
}

export function* updateCartQtyData() {
  yield takeLatest(UPDATE_CART_QTY, updateCartQty);
}

export function* deleteFromCart(action) {
  const token = yield select(makeSelectToken());
  const stateCart = yield select(makeSelectCart());
  const requestURL = config.apiUrl + 'carts/' + stateCart.uid + '/items/' + action.item;

  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  };

  if (token) {
    options.headers.Authorization = token.token_type + ' ' + token.access_token;
  }

  try {
    yield call(request, requestURL, options);
    yield put(getCurrentCart());
  } catch (err) {
    console.log(err);
  }
}

export function* deleteFromCartData() {
  take(DELETE_FROM_CART, deleteFromCart);
}

export function* createCarts() {
  const requestURL = config.apiUrl + 'carts';

  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
    method: 'POST',
  };

  try {
    const cart = yield call(request, requestURL, options);
    localStorage('cartUid', cart.uid);
    yield put(saveCart(cart));
  } catch (err) {
    console.log(err);
  }
}

export function* createCartData() {
  yield takeLatest(CREATE_CART, createCarts);
}

export function* logoutF() {
  yield put(createCart());
}

export function* logoutData() {
  yield takeLatest(LOGOUT, logoutF);
}

export function* getCarts(action) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  };

  const requestURLCart = config.apiUrl + 'carts/' + action.uid;

  try {
    // Call our request helper (see 'utils/request')
    const cart = yield call(request, requestURLCart, options);
    yield put(saveCart(cart));
  } catch (err) {
    console.log(err);
  }
}

export function* getCartData() {
  yield takeLatest(GET_CART_ID, getCarts);
}

// Bootstrap sagas
export default [
  userData,
  initAppData,
  getWishlistData,
  getCartUserData,
  addToWishlistData,
  deleteFromWishlistData,
  addToCartData,
  getCurrentCartData,
  updateCartQtyData,
  createCartData,
  logoutData,
  getCartData,
];
