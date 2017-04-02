import { call, put, takeLatest, select, take, cancel, takeEvery } from 'redux-saga/effects';
import { LOAD_COUNTRIES } from './constants';
import { saveCountries, errorLoadingCountries } from './actions';
import config from 'config';

import request from 'utils/request';

function* getCountries() {
  const requestURL = config.apiUrl + 'shipping/countries';

  try {
    // Call our request helper (see 'utils/request')
    const countries = yield call(request, requestURL);
    yield put(saveCountries(countries.content));
  } catch (err) {
    console.log(err);
  }
}

function* getCountriesData() {
  yield takeLatest(LOAD_COUNTRIES, getCountries);
}

export default [
  getCountriesData,
];
