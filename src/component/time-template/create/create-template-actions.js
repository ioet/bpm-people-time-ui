import axios from 'axios';
import { getTemplateToCreate } from './create-template-selector';
import { removeAllTextFieldDataAndErrors } from '../../bpm-text-field/text-field-actions';
import { addTimeTemplate } from '../template-actions';
import { showMessage } from '../../message-snackbar/message-actions';
import { CreateTemplateErrorMessage } from './create-template-const';

export const SHOW_CREATE_TEMPLATE_DIALOG = 'SHOW_CREATE_TEMPLATE_DIALOG';
export const HIDE_CREATE_TEMPLATE_DIALOG = 'HIDE_CREATE_TEMPLATE_DIALOG';

const PEOPLE_TIME_API_PATH = '/time-templates';
axios.defaults.baseURL = process.env.BPM_PEOPLE_TIME_API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const showCreateDialog = () => ({
  type: SHOW_CREATE_TEMPLATE_DIALOG,
});

export const hideCreateDialog = () => ({
  type: HIDE_CREATE_TEMPLATE_DIALOG,
});

export const createTimeTemplate = () => (
  (dispatch, getState) => {
    const template = getTemplateToCreate(getState());

    return axios.post(PEOPLE_TIME_API_PATH, {
      ...template,
    })
      .then((response) => {
        dispatch(addTimeTemplate(response.data));
        dispatch(hideCreateDialog());
        dispatch(removeAllTextFieldDataAndErrors());
      })
      .catch((error) => {
        console.log(error.response);
        dispatch(showMessage(CreateTemplateErrorMessage.CREATE_TEMPLATE_FAILED));
      });
  }
);

export const isTemplateDataValid = template => true;
export const closeCreateTemplateDialog = confirmed => (
  (dispatch, getState) => {
    if (confirmed) {
      const template = getTemplateToCreate(getState());
      if (isTemplateDataValid(template)) {
        return dispatch(createTimeTemplate(template));
      }
      return null;
    }
    dispatch(hideCreateDialog());
    dispatch(removeAllTextFieldDataAndErrors());
    return null;
  }
);
