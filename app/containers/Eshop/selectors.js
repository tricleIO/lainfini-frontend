import { createSelector } from 'reselect';

const selectEshop = (state) => state.get('eshop');

const makeSelectProducts = () => createSelector(
  selectEshop,
  (eshopState) => eshopState.get('products')
);

export {
  selectEshop,
  makeSelectProducts,
};
