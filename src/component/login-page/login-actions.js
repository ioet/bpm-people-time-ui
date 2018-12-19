import LoginAction from './login-action-types';
import { LoginErrorMessage, LoginStateConst } from './login-const';
import { showMessage } from '../message-snackbar/message-actions';
import Cookie from '../../cookies/Cookie';
import { getTimeTemplates } from '../time-template/template-actions';


export const loginAction = loginToken => ({
  type: LoginAction.PERFORM_LOGIN,
  loginToken,
});

export const performLogin = loginToken => (
  (dispatch) => {
    new Cookie(LoginStateConst.TOKEN_KEY).setValue(loginToken, 1);
    dispatch(loginAction(loginToken));
    dispatch(getTimeTemplates());
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
    new Cookie(LoginStateConst.TOKEN_KEY).remove();
    dispatch(logoutAction());
  }
);
