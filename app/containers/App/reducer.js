import { fromJS } from 'immutable';

import {
  CHANGE_MENU_STATE,
  CHANGE_HOMEPAGE_STATE,
} from './constants';

const initialState = fromJS({
  menuActive: false,
  isHomepage: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MENU_STATE:
      return state
        .set('menuActive', action.menuActive);
    case CHANGE_HOMEPAGE_STATE:
      return state
        .set('isHomepage', action.isHomepage);
    default:
      return state;
  }
}

export default appReducer;
