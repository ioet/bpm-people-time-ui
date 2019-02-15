export const SET_INPUT_ERROR = 'SET_INPUT_ERROR';
export const REMOVE_ALL_INPUT_ERRORS = 'REMOVE_ALL_INPUT_ERRORS';

export const CLEAR_TEXT_FIELDS = 'CLEAR_TEXT_FIELDS';

export const setInputError = field => ({
  type: SET_INPUT_ERROR,
  field,
});

export const removeAllInputErrors = () => ({
  type: REMOVE_ALL_INPUT_ERRORS,
});

export const removeAllTextFieldData = () => ({
  type: CLEAR_TEXT_FIELDS,
});
