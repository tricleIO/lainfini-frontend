import {
  LOAD_ARRIVALS,
  LOAD_ARRIVALS_SUCCESS,
  LOAD_ARRIVALS_ERROR,
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
