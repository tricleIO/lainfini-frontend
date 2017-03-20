import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {page}
 *
 * @return {object}    An action object with a type of LOAD_PRODUCTS
 */
export function loadProducts(page = 0) {
  return {
    type: LOAD_PRODUCTS,
    page,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function productsLoaded(products, page) {
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    products,
    page,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function productsLoadingError(error) {
  return {
    type: LOAD_PRODUCTS_ERROR,
    error,
  };
}
