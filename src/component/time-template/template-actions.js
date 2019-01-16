import axios from 'axios';
import { showMessage } from '../message-snackbar/message-actions';
import TemplateAction from './template-action-types';
import { TemplateErrorMessage } from './template-const';
import { getCurrentUserId } from '../login-page/login-selector';

const PEOPLE_TIME_API_PATH = '/time-templates';
axios.defaults.baseURL = process.env.BPM_PEOPLE_TIME_API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const addTimeTemplate = template => ({
  type: TemplateAction.ADD_TEMPLATE,
  template,
});

export const addTimeTemplates = template => ({
  type: TemplateAction.ADD_TEMPLATES,
  template,
});

export const getTimeTemplates = () => (
  (dispatch, getState) => {
    const personId = getCurrentUserId(getState());
    return axios.get(PEOPLE_TIME_API_PATH, {
      params: {
        personId,
      },
    })
      .then((response) => {
        dispatch(addTimeTemplates(response.data));
      })
      .catch((error) => {
        dispatch(showMessage(TemplateErrorMessage.FAILED_TO_LOAD_TIME_TEMPLATES));
      });
  }
);
