import expect from 'expect';
import reducer from '../../component/bpm-text-field/text-field-reducer';
import {
  CLEAR_TEXT_FIELDS,
  REMOVE_INPUT_ERROR,
  SET_INPUT_ERROR,
} from '../../component/bpm-text-field/text-field-actions';

const INITIAL_STATE = '@@INIT';

const initialStateAction = {
  type: INITIAL_STATE,
};

describe('text field reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, initialStateAction))
      .toEqual({
        createdTemplateError: {},
      });
  });

  it('handles set input error', () => {
    const field = 'someField';

    const setInputErrorAction = {
      type: SET_INPUT_ERROR,
      field,
    };
    expect(reducer({}, setInputErrorAction)).toEqual({
      createdTemplateError: {
        [field]: true,
      },
    });
  });

  it('handles remove input error', () => {
    const field = 'someField';

    const removeInputErrorAction = {
      type: REMOVE_INPUT_ERROR,
      field,
    };

    expect(reducer({}, removeInputErrorAction)).toEqual({
      createdTemplateError: {
        [field]: false,
      },
    });
  });

  it('handles clear text fields and removes all errors', () => {

    const clearTextFieldsAction = {
      type: CLEAR_TEXT_FIELDS,
    };

    expect(reducer({}, clearTextFieldsAction)).toEqual({
      createdTemplateError: {},
    });
  });
});
