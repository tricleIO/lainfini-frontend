import { fromJS } from 'immutable';
import {
  LOAD_WORK_IMAGES,
  LOAD_WORK_IMAGES_SUCCESS,
  LOAD_WORK_IMAGES_ERROR,
  LOAD_CAROUSEL_IMAGES,
  LOAD_CAROUSEL_IMAGES_ERROR,
  LOAD_CAROUSEL_IMAGES_SUCCESS,
} from './constants';

const initialState = fromJS({
  loadingWorkImages: false,
  errorWorkImages: false,
  workImages: null,
  loadingCarouselImages: false,
  errorCarouselImages: false,
  carouselImages: null,
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_WORK_IMAGES:
      return state
        .set('loadingWorkImages', true)
        .set('workImages', null)
        .set('errorWorkImages', false);
    case LOAD_WORK_IMAGES_SUCCESS:
      return state
        .set('loadingWorkImages', false)
        .set('workImages', action.images);
    case LOAD_WORK_IMAGES_ERROR:
      return state
        .set('loadingWorkImages', false)
        .set('errorWorkImages', action.error);
    case LOAD_CAROUSEL_IMAGES:
      return state
        .set('loadingCarouselImages', true)
        .set('carouselImages', null)
        .set('errorCarouselImages', false);
    case LOAD_CAROUSEL_IMAGES_SUCCESS:
      return state
        .set('loadingCarouselImages', false)
        .set('carouselImages', action.images);
    case LOAD_CAROUSEL_IMAGES_ERROR:
      return state
        .set('loadingCarouselImages', false)
        .set('errorCarouselImages', action.error);
    default:
      return state;
  }
}

export default profileReducer;
