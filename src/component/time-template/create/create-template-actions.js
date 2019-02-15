import { getTemplateToCreate } from './create-template-selector';
import { removeAllInputErrors, removeAllTextFieldData, setInputError } from '../../bpm-text-field/text-field-actions';
import { addTimeTemplates } from '../template-actions';
import { showMessage } from '../../message-snackbar/message-actions';
import { CreateTemplateErrorMessage, DialogContentFieldErros, DialogContentFieldNames } from './create-template-const';
import PeopleTimeApi from '../../../apis/PeopleTimeApi';
import InputValidator from '../../bpm-text-field/InputValidator';

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
        dispatch(removeAllTextFieldData());
      })
      .catch((error) => {
        dispatch(showMessage(CreateTemplateErrorMessage.CREATE_TEMPLATE_FAILED));
      });
  }
);

export const isTemplateDataValid = (dispatch, template) => {
  dispatch(removeAllInputErrors());

  const fieldNames = Object.values(DialogContentFieldNames);
  const errorMessages = Object.values(DialogContentFieldErros);

  const inputValidator = new InputValidator();
  for (let i = 0; i < fieldNames.length - 1; i++) {
    if (!inputValidator.isValidStringInput(template[fieldNames[i]])) {
      dispatch(showMessage(errorMessages[i]));
      dispatch(setInputError(fieldNames[i]));
      return false;
    }
  }
  if (!inputValidator.isValidArrayWithAtLeastOneEntry(template[DialogContentFieldNames.TEMPLATE_SKILLS])) {
    dispatch(showMessage(DialogContentFieldErros.TEMPLATE_SKILLS));
    dispatch(setInputError(DialogContentFieldNames.TEMPLATE_SKILLS));
    return false;
  }
  return true;
};

export const closeCreateTemplateDialog = confirmed => (
  (dispatch, getState) => {
    if (confirmed) {
      const template = getTemplateToCreate(getState());
      if (isTemplateDataValid(dispatch, template)) {
        return dispatch(createTimeTemplate(template));
      }
      return null;
    }
    dispatch(hideCreateDialog());
    dispatch(removeAllTextFieldData());
    dispatch(removeAllInputErrors());
    return null;
  }
);
