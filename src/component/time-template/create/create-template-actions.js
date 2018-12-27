import TimeTemplateControllerApi from 'swagger_bpm_people_time_api/src/api/TimeTemplateControllerApi';
import { getCreatedTemplate } from './create-template-selector';
import { removeAllTextFieldDataAndErrors } from '../../bpm-text-field/text-field-actions';
import { addTimeTemplate } from '../template-actions';

export const SHOW_CREATE_TEMPLATE_DIALOG = 'SHOW_CREATE_TEMPLATE_DIALOG';
export const HIDE_CREATE_TEMPLATE_DIALOG = 'HIDE_CREATE_TEMPLATE_DIALOG';

export const showCreateDialog = () => ({
  type: SHOW_CREATE_TEMPLATE_DIALOG,
});

export const hideCreateDialog = () => ({
  type: HIDE_CREATE_TEMPLATE_DIALOG,
});

export const createTimeTemplate = () => (
  (dispatch, getState) => {
    const timeTemplateApi = new TimeTemplateControllerApi();

    const template = getCreatedTemplate(getState());
    console.log('template', template);
    return timeTemplateApi.createTimeTemplateUsingPOST(template)
      .then((response) => {
        console.log(response);
        dispatch(addTimeTemplate(response));
        dispatch(hideCreateDialog());
        dispatch(removeAllTextFieldDataAndErrors());
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

export const isTemplateDataValid = (template) => {
  // TODO validate template data
  return true;
};

export const closeCreateTemplateDialog = confirmed => (
  (dispatch, getState) => {
    if (confirmed) {
      const template = getCreatedTemplate(getState());
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
