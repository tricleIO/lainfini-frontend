import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_PRODUCT } from './constants';
import { productLoaded, productLoadingError } from './actions';

import config from 'config';

import request from 'utils/request';

export function* getProduct(action) {
  // Select username from store
  const requestURL = config.apiUrl + 'products?slug=' + action.urlSlug;

  try {
    // Call our request helper (see 'utils/request')
    const product = yield call(request, requestURL);
    yield put(productLoaded(product, 0));
  } catch (err) {
    yield put(productLoadingError(err.toString()));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* productsData() {
  yield takeLatest(LOAD_PRODUCT, getProduct);
}

// Bootstrap sagas
export default [
  productsData,
];
