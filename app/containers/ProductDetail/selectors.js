import { createSelector } from 'reselect';

const selectProductDetail = (state) => state.get('productDetail');

const makeSelectProduct = () => createSelector(
  selectProductDetail,
  (productDetailState) => productDetailState.get('product')
);

export {
  selectProductDetail,
  makeSelectProduct,
};
