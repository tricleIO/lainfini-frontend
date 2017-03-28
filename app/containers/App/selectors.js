import { createSelector } from 'reselect';

// selectLocationState expects a plain JS object for the routing state
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectApp = (state) => state.get('app');

const makeSelectMenuActive = () => createSelector(
  selectApp,
  (appState) => appState.get('menuActive')
);

const makeIsHomepage = () => createSelector(
  selectApp,
  (appState) => appState.get('isHomepage')
);

const makeSelectLastViewed = () => createSelector(
  selectApp,
  (appState) => appState.get('lastViewedDesigns')
);

const makeSelectCookiesAccepted = () => createSelector(
  selectApp,
  (appState) => appState.get('cookiesAccepted')
);

const makeSelectUser = () => createSelector(
  selectApp,
  (appState) => appState.get('user')
);

const makeSelectToken = () => createSelector(
  selectApp,
  (appState) => appState.get('token')
);

const makeSelectWishlist = () => createSelector(
  selectApp,
  (appState) => appState.get('wishlist')
);

const makeSelectCart = () => createSelector(
  selectApp,
  (appState) => appState.get('cart')
);

export {
  selectLocationState,
  selectApp,
  makeSelectMenuActive,
  makeIsHomepage,
  makeSelectLastViewed,
  makeSelectCookiesAccepted,
  makeSelectUser,
  makeSelectToken,
  makeSelectWishlist,
  makeSelectCart,
};
