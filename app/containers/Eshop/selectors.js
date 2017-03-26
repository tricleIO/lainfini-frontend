import { createSelector } from 'reselect';

const selectEshop = (state) => state.get('eshop');

const makeSelectProducts = () => createSelector(
  selectEshop,
  (eshopState) => eshopState.get('products')
);

const makeSelectFilter = (type) => createSelector(
  selectEshop,
  (eshopState) => eshopState.get('filterBy' + type)
);

export {
  selectEshop,
  makeSelectProducts,
  makeSelectFilter,
};
