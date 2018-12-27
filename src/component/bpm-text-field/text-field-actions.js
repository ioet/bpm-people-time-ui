export const SET_TEXT_FIELD_DATA = 'SET_TEXT_FIELD_DATA';

export const SET_INPUT_ERROR = 'SET_INPUT_ERROR';
export const REMOVE_INPUT_ERROR = 'REMOVE_INPUT_ERROR';

export const CLEAR_TEXT_FIELDS = 'CLEAR_TEXT_FIELDS';

export const setTextFieldData = (field, value) => ({
  type: SET_TEXT_FIELD_DATA,
  field,
  value,
});

export const setInputError = field => ({
  type: SET_INPUT_ERROR,
  field,
});

export const removeInputError = field => ({
  type: REMOVE_INPUT_ERROR,
  field,
});

export const removeAllTextFieldDataAndErrors = () => ({
  type: CLEAR_TEXT_FIELDS,
});
