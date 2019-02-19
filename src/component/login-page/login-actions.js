import LoginAction from './login-action-types';
import { LoginErrorMessage, LoginStateConst } from './login-const';
import { showMessage } from '../message-snackbar/message-actions';
import Cookie from '../../cookies/Cookie';
import { getTimeTemplates } from '../time-template/template-actions';
import PeopleApi from '../../apis/PeopleApi';
import { getAllOrganizations } from '../time-template/create/organizations/organizations-actions';
import { getAllProjects } from '../time-template/create/projects/projects-actions';
import { getAllSkills } from '../time-template/create/skills/skills-actions';
import { getAllActivities } from '../time-template/create/activities/activities-actions';

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
    dispatch(getAllActivities());
    dispatch(getAllOrganizations());
    dispatch(getAllProjects());
    dispatch(getAllSkills());
  }
);

export const createNewUser = (loginToken, userEmail, userName) => (
  dispatch => new PeopleApi().createNewUser(userEmail, userName)
    .then((response) => {
      dispatch(performLogin(loginToken, userEmail, response.data.id));
    })
    .catch((error) => {
      dispatch(showMessage(LoginErrorMessage.FAILED_TO_CREATE_NEW_USER));
    })
);

export const getUserIdByEmail = (loginToken, userEmail, userName) => (
  dispatch => new PeopleApi().getUserByEmail(userEmail)
    .then((response) => {
      const userId = response.data[0].id;
      dispatch(performLogin(loginToken, userEmail, userId));
    })
    .catch((error) => {
      if (error.response.status === 404) {
        dispatch(createNewUser(loginToken, userEmail, userName));
      } else {
        dispatch(showMessage(LoginErrorMessage.BPM_SERVER_NOT_AVAILABLE));
      }
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
