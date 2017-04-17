import { createSelector } from 'reselect';

const selectUser = (state) => state.get('user');

const makeSelectRegisterError = () => createSelector(
  selectUser,
  (State) => State.get('registerError')
);

export {
  selectUser,
  makeSelectRegisterError,
};
