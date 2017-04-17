import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_CAROUSEL_IMAGES, LOAD_WORK_IMAGES } from './constants';
import { saveCarouselImages, saveWorkImages } from './actions';
import config from 'config';

import request from 'utils/request';

function* getWorksImages() {
  const requestURL = config.apiUrl + 'files/collections/mirka-works';

  try {
    // Call our request helper (see 'utils/request')
    const images = yield call(request, requestURL);
    yield put(saveWorkImages(images));
  } catch (err) {
    console.log(err);
  }
}

function* getWorksImagesData() {
  yield takeLatest(LOAD_WORK_IMAGES, getWorksImages);
}

function* geCarouselImages() {
  const requestURL = config.apiUrl + 'files/collections/mirka-carousel';

  try {
    // Call our request helper (see 'utils/request')
    const images = yield call(request, requestURL);
    yield put(saveCarouselImages(images));
  } catch (err) {
    console.log(err);
  }
}

function* getCarouselImagesData() {
  yield takeLatest(LOAD_CAROUSEL_IMAGES, geCarouselImages);
}

export default [
  getWorksImagesData,
  getCarouselImagesData,
];
