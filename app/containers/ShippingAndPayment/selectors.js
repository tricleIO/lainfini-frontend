import { createSelector } from 'reselect';

const selectShippingAndPayment = (state) => state.get('ShippingAndPayment');

const makeSelectShippingMethods = () => createSelector(
  selectShippingAndPayment,
  (State) => State.get('shippingMethods')
);

const makeSelectPaymentMethods = () => createSelector(
  selectShippingAndPayment,
  (State) => State.get('paymentMethods')
);

const makeSelectLoading = () => createSelector(
  selectShippingAndPayment,
  (State) => State.get('loading')
);

const makeSelectOrder = () => createSelector(
  selectShippingAndPayment,
  (State) => { return State ? State.get('order') : null; } // eslint-disable-line
);

export {
  selectShippingAndPayment,
  makeSelectShippingMethods,
  makeSelectPaymentMethods,
  makeSelectLoading,
  makeSelectOrder,
};
