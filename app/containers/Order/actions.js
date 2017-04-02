import {
  LOAD_COUNTRIES,
  LOAD_COUNTRIES_ERROR,
  LOAD_COUNTRIES_SUCCESS,
} from './constants';

export function loadCountries() {
  return {
    type: LOAD_COUNTRIES,
  };
}

export function saveCountries(countries) {
  return {
    type: LOAD_COUNTRIES_SUCCESS,
    countries,
  };
}

export function errorLoadingCountries(error) {
  return {
    type: LOAD_COUNTRIES_ERROR,
    error,
  };
}
