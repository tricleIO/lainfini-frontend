import {
  CHANGE_MENU_STATE,
  CHANGE_HOMEPAGE_STATE,
  SAVE_TOKEN,
  ADD_LAST_VIEWED_DESIGN,
  SAVE_COOKIE_LAW,
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

export function addLastViewedDesign(design) {
  return {
    type: ADD_LAST_VIEWED_DESIGN,
    design,
  };
}

export function saveCookieAccepted(cookies) {
  return {
    type: SAVE_COOKIE_LAW,
    cookies,
  };
}
