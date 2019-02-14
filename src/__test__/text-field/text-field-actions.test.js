import expect from 'expect';
import {
  CLEAR_TEXT_FIELDS,
  REMOVE_INPUT_ERROR,
  removeAllTextFieldDataAndErrors,
  removeInputError,
  SET_INPUT_ERROR,
  setInputError,
} from '../../component/bpm-text-field/text-field-actions';
import {
  EDIT_CREATE_TEMPLATE_DATA,
  setCreateTemplateData
} from '../../component/time-template/create/create-template-actions';

describe('Tests text field actions', () => {
  it('Creates an action to update template creation data', () => {
    const field = 'fieldName';
    const value = 'fieldValue';

    const expectedAction = {
      type: EDIT_CREATE_TEMPLATE_DATA,
      field,
      value,
    };

    expect(setCreateTemplateData(field, value))
      .toEqual(expectedAction);
  });

  it('Creates an action to set an input error on a specified field', () => {
    const field = 'fieldName';

    const expectedAction = {
      type: SET_INPUT_ERROR,
      field,
    };

    expect(setInputError(field))
      .toEqual(expectedAction);
  });

  it('Creates an action to remove an input error on a specified field', () => {
    const field = 'fieldName';

    const expectedAction = {
      type: REMOVE_INPUT_ERROR,
      field,
    };

    expect(removeInputError(field))
      .toEqual(expectedAction);
  });

  it('Creates an action to remove input errors and data on all fields', () => {
    const expectedAction = {
      type: CLEAR_TEXT_FIELDS,
    };

    expect(removeAllTextFieldDataAndErrors())
      .toEqual(expectedAction);
  });
});
