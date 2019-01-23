import axios from 'axios';
import LoginAction from './login-action-types';
import { LoginErrorMessage, LoginStateConst } from './login-const';
import { showMessage } from '../message-snackbar/message-actions';
import Cookie from '../../cookies/Cookie';
import { getTimeTemplates } from '../time-template/template-actions';
import { TemplateErrorMessage } from '../time-template/template-const';

const PEOPLE_API_PATH = '/people';
const peopleAPI = axios.create({
  baseURL: process.env.BPM_PEOPLE_API_URL,
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
});

export const loginAction = (loginToken, userEmail, userId) => ({
  type: LoginAction.PERFORM_LOGIN,
  loginToken,
  userEmail,
  userId,
});

export const performLogin = (loginToken, userEmail) => (
  (dispatch) => {
    console.log("performLogin")
    new Cookie(LoginStateConst.TOKEN_KEY).setValue(loginToken, 1);
    new Cookie(LoginStateConst.USER_EMAIL).setValue(userEmail, 1);
    return peopleAPI.get(PEOPLE_API_PATH, {
      params: {
        email: userEmail,
      },
    })
      .then((response) => {
        console.log("response", response)
        const userId = response.data[0].id;
        new Cookie(LoginStateConst.USER_ID).setValue(userId, 1);
        dispatch(loginAction(loginToken, userEmail, userId));
        dispatch(getTimeTemplates());
      })
      .catch((error) => {
        dispatch(showMessage(LoginErrorMessage.BPM_SERVER_NOT_AVAILABLE));
      });
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
