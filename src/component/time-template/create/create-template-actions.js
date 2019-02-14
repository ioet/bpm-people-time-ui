import { getTemplateToCreate } from './create-template-selector';
import { removeAllTextFieldDataAndErrors } from '../../bpm-text-field/text-field-actions';
import { addTimeTemplates } from '../template-actions';
import { showMessage } from '../../message-snackbar/message-actions';
import { CreateTemplateErrorMessage } from './create-template-const';
import PeopleTimeApi from '../../apis/PeopleTimeApi';

export const SHOW_CREATE_TEMPLATE_DIALOG = 'SHOW_CREATE_TEMPLATE_DIALOG';
export const HIDE_CREATE_TEMPLATE_DIALOG = 'HIDE_CREATE_TEMPLATE_DIALOG';
export const EDIT_CREATE_TEMPLATE_DATA = 'EDIT_CREATE_TEMPLATE_DATA';

export const showCreateDialog = () => ({
  type: SHOW_CREATE_TEMPLATE_DIALOG,
});

export const setCreateTemplateData = (field, value) => ({
  type: EDIT_CREATE_TEMPLATE_DATA,
  field,
  value,
});

export const hideCreateDialog = () => ({
  type: HIDE_CREATE_TEMPLATE_DIALOG,
});

export const createTimeTemplate = () => (
  (dispatch, getState) => {
    const template = getTemplateToCreate(getState());

    return new PeopleTimeApi().createTimeTemplate(template)
      .then((response) => {
        dispatch(addTimeTemplates([response.data]));
        dispatch(hideCreateDialog());
        dispatch(removeAllTextFieldDataAndErrors());
      })
      .catch((error) => {
        console.log(error.response);
        dispatch(showMessage(CreateTemplateErrorMessage.CREATE_TEMPLATE_FAILED));
      });
  }
);

// TODO validate templates
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
