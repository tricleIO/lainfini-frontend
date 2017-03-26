import {
  CHANGE_MENU_STATE,
  CHANGE_HOMEPAGE_STATE,
  SAVE_TOKEN,
  ADD_LAST_VIEWED_DESIGN,
  SAVE_COOKIE_LAW,
  SAVE_USER,
  INIT_APP,
  LOGOUT,
  SAVE_WISHLIST,
  SAVE_CART,
  ADD_TO_WISHLIST,
  DELETE_FROM_WISHLIST,
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

export function saveToken(token, fromAppInit = false) {
  return {
    type: SAVE_TOKEN,
    fromAppInit,
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

export function saveUser(user, fromAppInit = false) {
  return {
    type: SAVE_USER,
    fromAppInit,
    user,
  };
}

export function initApp() {
  return {
    type: INIT_APP,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function saveWishlist(wishlist) {
  return {
    type: SAVE_WISHLIST,
    wishlist,
  };
}

export function saveCart(cart) {
  return {
    type: SAVE_CART,
    cart,
  };
}

export function addToWishlist(uid) {
  return {
    type: ADD_TO_WISHLIST,
    uid,
  };
}

export function deleteFromWishlist(uid) {
  return {
    type: DELETE_FROM_WISHLIST,
    uid,
  };
}
