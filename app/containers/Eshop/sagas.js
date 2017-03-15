import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_PRODUCTS } from './constants';
import { productsLoaded, productsLoadingError } from './actions';

import config from 'config';

import request from 'utils/request';

export function* getProducts() {
  // Select username from store
  const requestURL = config.apiUrl + 'products';

  try {
    // Call our request helper (see 'utils/request')
    const products = yield call(request, requestURL);
    yield put(productsLoaded(products.content, 0));
  } catch (err) {
    yield put(productsLoadingError(err.toString()));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* productsData() {
  const watcher = yield takeLatest(LOAD_PRODUCTS, getProducts);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  productsData,
];
