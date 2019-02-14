import {
  EDIT_CREATE_TEMPLATE_DATA,
  HIDE_CREATE_TEMPLATE_DIALOG,
  SHOW_CREATE_TEMPLATE_DIALOG,
} from './create-template-actions';
import { CLEAR_TEXT_FIELDS } from '../../bpm-text-field/text-field-actions';

export const createTemplateReducer = (state = { open: false, templateToCreate: {} }, action) => {
  switch (action.type) {
    case SHOW_CREATE_TEMPLATE_DIALOG:
      return {
        ...state,
        open: true,
      };
    case HIDE_CREATE_TEMPLATE_DIALOG:
      return {
        ...state,
        open: false,
      };
    case EDIT_CREATE_TEMPLATE_DATA:
      return {
        ...state,
        templateToCreate: {
          ...state.templateToCreate,
          [action.field]: action.value,
        },
      };
    case CLEAR_TEXT_FIELDS:
      return {
        ...state,
        templateToCreate: {},
      };
    default:
      return state;
  }
};

export default createTemplateReducer;
