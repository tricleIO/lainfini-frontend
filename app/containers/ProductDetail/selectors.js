import { createSelector } from 'reselect';

const selectProductDetail = (state) => state.get('productDetail');

const makeSelectProduct = () => createSelector(
  selectProductDetail,
  (productDetailState) => productDetailState.get('product')
);

const makeSelectError = () => createSelector(
  selectProductDetail,
  (productDetailState) => productDetailState.get('error')
);

export {
  selectProductDetail,
  makeSelectProduct,
  makeSelectError,
};
