import { fromJS } from 'immutable';
import localStorage from 'local-storage';

import _ from 'lodash';

import {
  CHANGE_MENU_STATE,
  CHANGE_HOMEPAGE_STATE,
  SAVE_TOKEN,
  ADD_LAST_VIEWED_DESIGN,
  SAVE_COOKIE_LAW,
  SAVE_USER,
  LOGOUT,
} from './constants';

const initialState = fromJS({
  cookiesAccepted: false,
  menuActive: false,
  isHomepage: false,
  user: {},
  wishlist: undefined,
  cart: undefined,
  token: localStorage('access-token'),
  lastViewedDesigns: localStorage('last-viewed-designs') ? JSON.parse(localStorage('last-viewed-designs')) : [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return state
        .set('wishlist', undefined)
        .set('cart', undefined)
        .set('user', {})
        .set('token', {});
    case SAVE_USER:
      return state
        .set('user', action.user);
    case SAVE_COOKIE_LAW:
      return state
        .set('cookiesAccepted', action.cookies);
    case CHANGE_MENU_STATE:
      return state
        .set('menuActive', action.menuActive);
    case CHANGE_HOMEPAGE_STATE:
      return state
        .set('isHomepage', action.isHomepage);
    case SAVE_TOKEN:
      localStorage('access-token', action.token);
      return state
        .set('token', action.token);
    case ADD_LAST_VIEWED_DESIGN: // eslint-disable-line no-case-declarations
      const lastViewedDesigns = _(_(state.get('lastViewedDesigns')).isArray() ? state.get('lastViewedDesigns') : state.get('lastViewedDesigns').toJS()).filter((o) => o.uid !== action.design.uid).value();
      lastViewedDesigns.unshift(action.design);
      if (_(lastViewedDesigns).size() > 4) {
        lastViewedDesigns.pop();
      }
      localStorage('last-viewed-designs', JSON.stringify(lastViewedDesigns));
      return state
        .set('lastViewedDesigns', lastViewedDesigns);
    default:
      return state;
  }
}

export default appReducer;
