import { createSelector } from 'reselect';

const selectHomepage = (state) => state.get('homepage');

const makeSelectProducts = () => createSelector(
  selectHomepage,
  (hpState) => hpState.get('products')
);

export {
  selectHomepage,
  makeSelectProducts,
};
