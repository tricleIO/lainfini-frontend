import {
  GET_FAQ,
  GET_FAQ_SUCCESS,
  GET_FAQ_ERROR,
} from './constants';

export function getFaq() {
  return {
    type: GET_FAQ,
  };
}

export function getFaqSuccess(data) {
  return {
    type: GET_FAQ_SUCCESS,
    data,
  };
}

export function getFaqError(error) {
  return {
    type: GET_FAQ_ERROR,
    error,
  };
}
