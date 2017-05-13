import {
  LOAD_ARRIVALS,
  LOAD_ARRIVALS_SUCCESS,
  LOAD_ARRIVALS_ERROR,
  LOAD_LETS_GET_INSPIRED,
  LOAD_LETS_GET_INSPIRED_ERROR,
  LOAD_LETS_GET_INSPIRED_SUCCESS,
} from './constants';

export function loadArrivals() {
  return {
    type: LOAD_ARRIVALS,
  };
}

export function arrivalsLoaded(products) {
  return {
    type: LOAD_ARRIVALS_SUCCESS,
    products,
  };
}

export function arrivalsLoadingError(error) {
  return {
    type: LOAD_ARRIVALS_ERROR,
    error,
  };
}

export function loadLetsGetInspired() {
  return {
    type: LOAD_LETS_GET_INSPIRED,
  };
}

export function letsGetInspiredLoaded(products) {
  return {
    type: LOAD_LETS_GET_INSPIRED_SUCCESS,
    products,
  };
}

export function letsGetInspiredLoadingError(error) {
  return {
    type: LOAD_LETS_GET_INSPIRED_ERROR,
    error,
  };
}
