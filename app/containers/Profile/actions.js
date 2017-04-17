import {
  LOAD_CAROUSEL_IMAGES,
  LOAD_CAROUSEL_IMAGES_SUCCESS,
  LOAD_CAROUSEL_IMAGES_ERROR,
  LOAD_WORK_IMAGES,
  LOAD_WORK_IMAGES_SUCCESS,
  LOAD_WORK_IMAGES_ERROR,
} from './constants';

export function loadCarouselImages() {
  return {
    type: LOAD_CAROUSEL_IMAGES,
  };
}

export function saveCarouselImages(images) {
  return {
    type: LOAD_CAROUSEL_IMAGES_SUCCESS,
    images,
  };
}

export function errorCarouselImages(error) {
  return {
    type: LOAD_CAROUSEL_IMAGES_ERROR,
    error,
  };
}

export function loadWorkImages() {
  return {
    type: LOAD_WORK_IMAGES,
  };
}

export function saveWorkImages(images) {
  return {
    type: LOAD_WORK_IMAGES_SUCCESS,
    images,
  };
}

export function errorLoadingWorkImages(error) {
  return {
    type: LOAD_WORK_IMAGES_ERROR,
    error,
  };
}
