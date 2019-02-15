import { REMOVE_ALL_INPUT_ERRORS, SET_INPUT_ERROR } from './text-field-actions';

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
    case REMOVE_ALL_INPUT_ERRORS:
      return {
        createdTemplateError: {},
      };
    default:
      return state;
  }
};

export default textFieldReducer;
