import { fromJS } from 'immutable';
import localStorage from 'local-storage';

import _ from 'lodash';
import uuidV4 from 'uuid/v4';

import {
  CHANGE_MENU_STATE,
  CHANGE_HOMEPAGE_STATE,
  SAVE_TOKEN,
  ADD_LAST_VIEWED_DESIGN,
  SAVE_COOKIE_LAW,
  SAVE_USER,
  LOGOUT,
  SAVE_WISHLIST,
  SAVE_CART,
  ADD_NOTIFICATION,
  SHOWED_NOTIFICATION,
} from './constants';

const initialState = fromJS({
  cookiesAccepted: false,
  menuActive: false,
  isHomepage: false,
  user: {},
  wishlist: undefined,
  cart: undefined,
  token: localStorage('access-token'),
  lastViewedDesigns: localStorage('last-viewed-designs') ? localStorage('last-viewed-designs') : [],
  notifications: null,
  notificationsUpdate: true,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTIFICATION: // eslint-disable-line no-case-declarations
      const notification = action.notification;
      const notifications = state.get('notifications') ? state.get('notifications') : [];
      notification.uuid = uuidV4();
      notification.showed = false;
      notifications.push(notification);
      return state
        .set('notifications', notifications)
        .set('notificationsUpdate', !state.get('notificationsUpdate'));
    case SHOWED_NOTIFICATION:
      return state
        .set('notifications', _(state.get('notifications')).map((obj) => { const o = obj; if (obj.uuid === action.uuid) { o.showed = true; } return o; }).value());
    case SAVE_CART:
      return state
        .set('cart', action.cart);
    case SAVE_WISHLIST:
      return state
        .set('wishlist', action.wishlist);
    case LOGOUT:
      localStorage('access-token', {});
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
      localStorage('last-viewed-designs', lastViewedDesigns);
      return state
        .set('lastViewedDesigns', lastViewedDesigns);
    default:
      return state;
  }
}

export default appReducer;
