import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import {
  CLEAR_TEXT_FIELDS,
  REMOVE_INPUT_ERROR, removeAllTextFieldDataAndErrors, removeInputError,
  SET_INPUT_ERROR,
  SET_TEXT_FIELD_DATA,
  setInputError,
  setTextFieldData,
} from '../component/bpm-text-field/text-field-actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Tests text field actions', () => {
  it('Creates an action to update template creation data', () => {
    const field = 'fieldName';
    const value = 'fieldValue';

    const expectedAction = [
      {
        type: SET_TEXT_FIELD_DATA,
        field,
        value,
      },
    ];

    const store = mockStore({});

    store.dispatch(setTextFieldData(field, value));
    expect(store.getActions())
      .toEqual(expectedAction);
  });

  it('Creates an action to set an input error on a specified field', () => {
    const field = 'fieldName';

    const expectedAction = [
      {
        type: SET_INPUT_ERROR,
        field,
      },
    ];

    const store = mockStore({});

    store.dispatch(setInputError(field));
    expect(store.getActions())
      .toEqual(expectedAction);
  });

  it('Creates an action to remove an input error on a specified field', () => {
    const field = 'fieldName';

    const expectedAction = [
      {
        type: REMOVE_INPUT_ERROR,
        field,
      },
    ];

    const store = mockStore({});

    store.dispatch(removeInputError(field));
    expect(store.getActions())
      .toEqual(expectedAction);
  });

  it('Creates an action to remove input errors and data on all fields', () => {
    const expectedAction = [
      {
        type: CLEAR_TEXT_FIELDS,
      },
    ];

    const store = mockStore({});

    store.dispatch(removeAllTextFieldDataAndErrors());
    expect(store.getActions())
      .toEqual(expectedAction);
  });
});
