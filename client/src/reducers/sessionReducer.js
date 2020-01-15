import { LOGGED_IN } from '../actions/types';

const initialState = {
  status: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case LOGGED_IN:
      return {
        status: true
      }
    default:
      return state
  }
}
