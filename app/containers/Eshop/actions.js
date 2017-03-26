import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
  SELECT_FILTER_MATERIAL,
  SELECT_FILTER_SIZE,
} from './constants';

export function loadProducts(page = 0) {
  return {
    type: LOAD_PRODUCTS,
    page,
  };
}

export function productsLoaded(products, page) {
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    products,
    page,
  };
}

export function productsLoadingError(error) {
  return {
    type: LOAD_PRODUCTS_ERROR,
    error,
  };
}

export function selectFilterMaterial(uid) {
  return {
    type: SELECT_FILTER_MATERIAL,
    material: uid,
  };
}

export function selectFilterSize(uid) {
  return {
    type: SELECT_FILTER_SIZE,
    size: uid,
  };
}
