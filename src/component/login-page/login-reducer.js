import LoginAction from './login-action-types';
import { DEFAULT_USER_ID } from '../../index';

export const loginReducer = (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case LoginAction.PERFORM_LOGIN:
      return {
        isLoggedIn: true,
        loginToken: action.loginToken,
        userId: DEFAULT_USER_ID,
      };
    case LoginAction.PERFORM_LOGOUT:
      return {
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
