import {
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {page}
 *
 * @return {object}    An action object with a type of LOAD_PRODUCTS
 */
export function loadProduct(urlSlug) {
  return {
    type: LOAD_PRODUCT,
    urlSlug,
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
export function productLoaded(product, urlSlug) {
  return {
    type: LOAD_PRODUCT_SUCCESS,
    product,
    urlSlug,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function productLoadingError(error) {
  return {
    type: LOAD_PRODUCT_ERROR,
    error,
  };
}
