/* eslint-disable camelcase,prefer-destructuring */
import { TimeTemplateControllerApi } from 'swagger_bpm_people_time_api';
import { MessageAction } from './action-types';
import { ErrorMessage } from './constants';

const timeTemplateApi = new TimeTemplateControllerApi();

export const showMessage = message => ({
  type: MessageAction.SHOW_MESSAGE,
  message,
});
export const hideMessage = () => ({
  type: MessageAction.HIDE_MESSAGE,
});

export const getTimeTemplates = userId => (
  dispatch => timeTemplateApi.getAllTimeTemplatesForOnePersonUsingGET(userId)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      // console.log(error); find a way to log this error
      dispatch(showMessage(ErrorMessage.FAILED_TO_LOAD_TIME_TEMPLATES));
    })
);
