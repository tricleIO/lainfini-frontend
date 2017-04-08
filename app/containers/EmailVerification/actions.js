import { ACTIVATE_ACCOUNT } from './constants';

export function activateAccount(token) {
  return {
    type: ACTIVATE_ACCOUNT,
    token,
  };
}
