import { SET_INPUT_ERROR, CLEAR_TEXT_FIELDS, REMOVE_INPUT_ERROR } from './text-field-actions';

export const textFieldReducer = (state = { createdTemplateError: {} }, action) => {
  switch (action.type) {
    case SET_INPUT_ERROR:
      return {
        ...state,
        createdTemplateError: {
          ...state.createdTemplateError,
          [action.field]: true,
        },
      };
    case REMOVE_INPUT_ERROR:
      return {
        ...state,
        createdTemplateError: {
          ...state.createdTemplateError,
          [action.field]: false,
        },
      };
    case CLEAR_TEXT_FIELDS:
      return {
        createdTemplateError: {},
      };
    default:
      return state;
  }
};

export default textFieldReducer;
