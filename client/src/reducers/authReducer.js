import {FETCH_USER} from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;//either return user info or false
    default:
      return state;//still make request to check user log in or not
  }
}
