import { authSetUser } from '../actions/authAction';
/**
 *
 * @param {*} state
 * @param {*} action
 * @return {*}
 */
function r(state = { authenticated: false }, action) {
  switch (action.type) {
    case authSetUser.type:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

export default r;
