import {
  CHANGE_MENU_STATE,
  CHANGE_HOMEPAGE_STATE,
  SAVE_TOKEN,
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

export function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token,
  };
}
