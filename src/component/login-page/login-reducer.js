import LoginAction from './login-action-types';

export const login = (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case LoginAction.PERFORM_LOGIN:
      return {
        isLoggedIn: true,
        loginToken: action.loginToken,
      };
    case LoginAction.PERFORM_LOGOUT:
      return {
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default login;
