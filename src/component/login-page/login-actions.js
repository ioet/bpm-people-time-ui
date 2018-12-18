import LoginAction from './login-action-types';
import { LoginErrorMessage, LoginStateConst } from './login-const';
import { showMessage } from '../message-snackbar/message-actions';
import Cookie from '../../cookies/Cookie';


export const loginAction = loginToken => ({
  type: LoginAction.PERFORM_LOGIN,
  loginToken,
});

export const performLogin = loginToken => (
  (dispatch) => {
    Cookie.setCookie(LoginStateConst.TOKEN_KEY, loginToken, 1);
    dispatch(loginAction(loginToken));
  }
);

export const loginFailed = () => (
  dispatch => dispatch(showMessage(LoginErrorMessage.LOGIN_FAILED))
);

export const logoutAction = () => ({
  type: LoginAction.PERFORM_LOGOUT,
});

export const performLogout = () => (
  (dispatch) => {
    Cookie.removeCookie(LoginStateConst.TOKEN_KEY);
    dispatch(logoutAction());
  }
);
