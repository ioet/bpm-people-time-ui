import TimeTemplateControllerApi from 'swagger_bpm_people_time_api/src/api/TimeTemplateControllerApi';
import { showMessage } from '../message-snackbar/message-actions';
import TemplateAction from './template-action-types';
import TemplateErrorMessage from './template-const';

const timeTemplateApi = new TimeTemplateControllerApi();

export const addTimeTemplates = template => ({
  type: TemplateAction.ADD_TEMPLATES,
  template,
});

export const getTimeTemplates = userId => (
  dispatch => timeTemplateApi.getAllTimeTemplatesForOnePersonUsingGET(userId)
    .then((data) => {
      dispatch(addTimeTemplates(data));
    })
    .catch((error) => {
      // console.log(error); find a way to log this error
      dispatch(showMessage(TemplateErrorMessage.FAILED_TO_LOAD_TIME_TEMPLATES));
    })
);
