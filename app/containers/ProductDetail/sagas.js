import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_PRODUCT } from './constants';
import { productLoaded, productLoadingError } from './actions';

import config from 'config';

import request from 'utils/request';

export function* getProduct(action) {
  // Select username from store
  const requestURL = config.apiUrl + 'products?urlSlug=' + action.urlSlug;

  try {
    // Call our request helper (see 'utils/request')
    const products = yield call(request, requestURL);
    yield put(productLoaded(products.content[0], 0));
  } catch (err) {
    yield put(productLoadingError(err.toString()));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* productsData() {
  const watcher = yield takeLatest(LOAD_PRODUCT, getProduct);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  productsData,
];
