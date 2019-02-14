import LoginAction from './login-action-types';
import { LoginErrorMessage, LoginStateConst } from './login-const';
import { showMessage } from '../message-snackbar/message-actions';
import Cookie from '../../cookies/Cookie';
import { getTimeTemplates } from '../time-template/template-actions';
import PeopleApi from '../apis/PeopleApi';
import { getLastActiveTime } from '../time-event/time-event-actions';
import { getAllOrganizations } from '../time-template/create/organizations/organizations-actions';
import { getAllProjects } from '../time-template/create/projects/projects-actions';
import { getAllSkills } from '../time-template/create/skills/skills-actions';

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
    dispatch(getLastActiveTime());
    dispatch(getAllOrganizations());
    dispatch(getAllProjects());
    dispatch(getAllSkills());
  }
);

export const getUserIdByEmail = (loginToken, userEmail) => (
  dispatch => new PeopleApi().getUserByEmail(userEmail)
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
