import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_FAQ } from './constants';
import { getFaqSuccess, getFaqError } from './actions';

import config from 'config';

import request from 'utils/request';

export function* getFaq() {
  const requestURL = config.apiUrl + 'faqs';

  try {
    // Call our request helper (see 'utils/request')
    const faq = yield call(request, requestURL);
    yield put(getFaqSuccess(faq.content));
  } catch (err) {
    yield put(getFaqError(err.toString()));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* faqData() {
  const watcher = yield takeLatest(GET_FAQ, getFaq);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  faqData,
];
