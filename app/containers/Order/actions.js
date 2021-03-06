import {
  LOAD_COUNTRIES,
  LOAD_COUNTRIES_ERROR,
  LOAD_COUNTRIES_SUCCESS,
  SAVE_BILLING_ADDRESS,
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

export function saveBillingAddress(address) {
  return {
    type: SAVE_BILLING_ADDRESS,
    address,
  };
}
