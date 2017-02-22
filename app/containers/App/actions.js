import {
  CHANGE_MENU_STATE,
  CHANGE_HOMEPAGE_STATE,
} from './constants';

export function changeMenuState(state) {
  return {
    type: CHANGE_MENU_STATE,
    menuActive: state,
  };
}

export function changeHomepageState(state) {
  return {
    type: CHANGE_HOMEPAGE_STATE,
    isHomepage: state,
  };
}
