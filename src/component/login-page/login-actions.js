import LoginAction from './login-action-types';
import { removeCookie, setCookie } from '../../utils/Utils';
import { LoginErrorMessage, LoginStateConst } from './login-const';
import { showMessage } from '../message-snackbar/message-actions';

export const loginAction = loginToken => ({
  type: LoginAction.PERFORM_LOGIN,
  loginToken,
});

export const performLogin = loginToken => (
  (dispatch) => {
    setCookie(LoginStateConst.TOKEN_KEY, loginToken, 1);
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
    removeCookie(LoginStateConst.TOKEN_KEY);
    dispatch(logoutAction());
  }
);
