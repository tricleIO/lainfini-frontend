import { createSelector } from 'reselect';

const selectHomepage = (state) => state.get('homepage');

const makeSelectProducts = () => createSelector(
  selectHomepage,
  (hpState) => hpState.get('products')
);

const makeSelectInspired = () => createSelector(
  selectHomepage,
  (hpState) => hpState.get('inspiredProducts')
);

export {
  selectHomepage,
  makeSelectProducts,
  makeSelectInspired,
};
