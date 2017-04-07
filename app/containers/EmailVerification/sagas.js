import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { ACTIVATE_ACCOUNT } from './constants';
import config from 'config';
import request from 'utils/request';
import { saveToken, addNotification } from 'containers/App/actions';

function* activateAccount(action) {
  yield put(push('/catalog'));
  const requestURL = config.apiUrl + 'users/verify?verificationToken=' + action.token;

  try {
    // Call our request helper (see 'utils/request')
    const token = yield call(request, requestURL);
    yield put(addNotification({ message: 'Your account has been activated!.', level: 'success' }));
    yield put(saveToken(token));
  } catch (err) {
    console.log(err.toString());
  }
}

function* activateAccountData() {
  yield takeLatest(ACTIVATE_ACCOUNT, activateAccount);
}

export default [
  activateAccountData,
];
