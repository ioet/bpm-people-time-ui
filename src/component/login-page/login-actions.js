import LoginAction from './login-action-types';
import { LoginErrorMessage, LoginStateConst } from './login-const';
import { showMessage } from '../message-snackbar/message-actions';
import Cookie from '../../cookies/Cookie';
import { getTimeTemplates } from '../time-template/template-actions';
import peopleApi from '../axios/peopleApi';

export const loginAction = (loginToken, userEmail, userId) => ({
  type: LoginAction.PERFORM_LOGIN,
  loginToken,
  userEmail,
  userId,
});

export const performLogin = (loginToken, userEmail, userId) => (
  (dispatch) => {
    new Cookie(LoginStateConst.TOKEN_KEY).setValue(loginToken, 1);
    new Cookie(LoginStateConst.USER_EMAIL).setValue(userEmail, 1);
    new Cookie(LoginStateConst.USER_ID).setValue(userId, 1);
    dispatch(loginAction(loginToken, userEmail, userId));
    dispatch(getTimeTemplates());
  }
);

export const getUserIdByEmail = (loginToken, userEmail) => (
  dispatch => peopleApi.get('', {
    params: {
      email: userEmail,
    },
  })
    .then((response) => {
      const userId = response.data[0].id;
      dispatch(performLogin(loginToken, userEmail, userId));
    })
    .catch((error) => {
      dispatch(showMessage(LoginErrorMessage.BPM_SERVER_NOT_AVAILABLE));
    })
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
