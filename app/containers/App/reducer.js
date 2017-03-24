import { fromJS } from 'immutable';
import localStorage from 'local-storage';

import {
  CHANGE_MENU_STATE,
  CHANGE_HOMEPAGE_STATE,
  SAVE_TOKEN,
} from './constants';

const initialState = fromJS({
  menuActive: false,
  isHomepage: false,
  token: localStorage('access-token'),
});

function appReducer(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}

export default appReducer;
