import LoginAction from './login-action-types';

// TODO remove after functionality to get user info is implemented!
export const DEFAULT_USER_ID = 'a7c759a7-190d-47e9-baf7-ed89b4de9783';

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
