import { createSelector } from 'reselect';

const selectProfile = (state) => state.get('profile');

const makeSelectCarouselImages = () => createSelector(
  selectProfile,
  (profileState) => profileState.get('carouselImages')
);

const makeSelectWorkImages = () => createSelector(
  selectProfile,
  (profileState) => profileState.get('workImages')
);

export {
  selectProfile,
  makeSelectCarouselImages,
  makeSelectWorkImages,
};
