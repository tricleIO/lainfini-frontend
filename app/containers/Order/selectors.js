import { createSelector } from 'reselect';

const selectOrder = (state) => state.get('order');

const makeSelectCountries = () => createSelector(
  selectOrder,
  (orderState) => orderState.get('countries')
);

export {
  selectOrder,
  makeSelectCountries,
};
