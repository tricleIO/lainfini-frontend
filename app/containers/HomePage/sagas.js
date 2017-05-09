import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_ARRIVALS, LOAD_LETS_GET_INSPIRED } from './constants';
import { arrivalsLoaded, arrivalsLoadingError, letsGetInspiredLoaded, letsGetInspiredLoadingError } from './actions';

import config from 'config';

import request from 'utils/request';

export function* getProducts() {
  const requestURL = config.apiUrl + 'products/collections/?slug=new-arrivals';

  try {
    // Call our request helper (see 'utils/request')
    const products = yield call(request, requestURL);
    yield put(arrivalsLoaded(products));
  } catch (err) {
    yield put(arrivalsLoadingError(err.toString()));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* productsData() {
  const watcher = yield takeLatest(LOAD_ARRIVALS, getProducts);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* getInspiredProducts() {
  const requestURL = config.apiUrl + 'products/collections/?slug=lets-get-inspired';

  try {
    // Call our request helper (see 'utils/request')
    const products = yield call(request, requestURL);
    yield put(letsGetInspiredLoaded(products));
  } catch (err) {
    yield put(letsGetInspiredLoadingError(err.toString()));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* inspiredProductsData() {
  const watcher = yield takeLatest(LOAD_LETS_GET_INSPIRED, getInspiredProducts);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  productsData,
  inspiredProductsData,
];
