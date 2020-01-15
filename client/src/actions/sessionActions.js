import { LOGGED_IN } from './types';

export const loggedIn = (status) => {
  return {
    type: LOGGED_IN,
    payload: { status }
  }
}
