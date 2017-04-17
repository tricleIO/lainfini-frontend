import { createSelector } from 'reselect';

const selectOrder = (state) => state.get('order');

const makeSelectCountries = () => createSelector(
  selectOrder,
  (orderState) => { return orderState ? orderState.get('countries') : null; } // eslint-disable-line
);

const makeSelectBillingAddress = () => createSelector(
  selectOrder,
  (orderState) => { return orderState ? orderState.get('billingAddress') : null; } // eslint-disable-line
);

export {
  selectOrder,
  makeSelectCountries,
  makeSelectBillingAddress,
};
