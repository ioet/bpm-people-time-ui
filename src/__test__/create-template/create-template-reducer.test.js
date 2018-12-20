import expect from 'expect';
import {
  HIDE_CREATE_TEMPLATE_DIALOG,
  SHOW_CREATE_TEMPLATE_DIALOG,
} from '../../component/time-template/create/create-template-actions';
import createTemplate from '../../component/time-template/create/create-template-reducer';
import { CLEAR_TEXT_FIELDS, SET_TEXT_FIELD_DATA } from '../../component/bpm-text-field/text-field-actions';

const INITIAL_STATE = '@@INIT';

const initialStateAction = {
  type: INITIAL_STATE,
};

describe('create template reducer', () => {
  it('returns the initial state', () => {
    expect(createTemplate(undefined, initialStateAction))
      .toEqual({
        open: false,
        createdTemplate: {},
      });
  });

  it('handles show create template dialog', () => {
    const openCreateTemplateDialogAction = {
      type: SHOW_CREATE_TEMPLATE_DIALOG,
    };
    expect(createTemplate({}, openCreateTemplateDialogAction)).toEqual({
      open: true,
    });
  });

  it('handles hide create template dialog', () => {
    const closeCreateTemplateDialogAction = {
      type: HIDE_CREATE_TEMPLATE_DIALOG,
    };

    expect(createTemplate({}, closeCreateTemplateDialogAction)).toEqual({
      open: false,
    });
  });

  it('handles set text field data', () => {
    const field = 'someField';
    const value = 'some value';

    const setTextFieldDataAction = {
      type: SET_TEXT_FIELD_DATA,
      field,
      value,
    };
    expect(createTemplate({}, setTextFieldDataAction)).toEqual({
      createdTemplate: {
        [field]: value,
      },
    });
  });

  it('handles clear text field data', () => {
    const clearTextFieldDataAction = {
      type: CLEAR_TEXT_FIELDS,
    };
    expect(createTemplate({}, clearTextFieldDataAction)).toEqual({
      createdTemplate: {},
    });
  });
});
