//Actions
import { SessionConstants, receiveCurrentUser, receiveErrors } from '../actions/session_actions';
//Util
import { signup, login, logout } from '../util/session_api_util';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type) {
    case SessionConstants.SIGNUP:
      const signupSuccess = user => dispatch(receiveCurrentUser(user));
      const signupError = errors => dispatch(receiveErrors(errors));
      signup(signupSuccess, signupError, action.user);
      break;
    case SessionConstants.LOGIN:
      const loginSuccess = user => dispatch(receiveCurrentUser(user));
      const loginError = errors => dispatch(receiveErrors(errors));
      login(loginSuccess, loginError, action.user);
      break;
    case SessionConstants.LOGOUT:
      const logoutSuccess = () => next(action);
      const logoutError = errors => dispatch(receiveErrors(errors));
      logout(logoutSuccess, logoutError);
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
