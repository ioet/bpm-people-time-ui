import { TimeTemplateControllerApi } from 'swagger_bpm_people_time_api';
import { showMessage } from '../message-snackbar/message-actions';
import TemplateAction from './template-action-types';
import { TemplateErrorMessage } from './template-const';
import { getCurrentUserId } from '../login-page/login-selector';

const timeTemplateApi = new TimeTemplateControllerApi();

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
    const userId = getCurrentUserId(getState());
    return timeTemplateApi.getAllTimeTemplatesForOnePersonUsingGET(userId)
      .then((data) => {
        dispatch(addTimeTemplates(data));
      })
      .catch((error) => {
        // console.log(error); find a way to log this error
        dispatch(showMessage(TemplateErrorMessage.FAILED_TO_LOAD_TIME_TEMPLATES));
      });
  }
);
