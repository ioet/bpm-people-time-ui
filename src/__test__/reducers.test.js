import expect from 'expect';
import * as types from '../action-types';
import { message, templateList } from '../reducers';

const initialStateAction = {
  type: types.InitialAction.INITIAL_STATE,
};

describe('message reducer', () => {
  it('returns the initial state', () => {
    expect(message(undefined, initialStateAction))
      .toEqual({
        open: false,
      });
  });

  it('handles show message', () => {
    const someMsg = 'message';
    const showMessageAction = {
      type: types.MessageAction.SHOW_MESSAGE,
      message: someMsg,
    };
    expect(message({}, showMessageAction)).toEqual({
      open: true,
      message: someMsg,
    });
  });

  it('handles hide message', () => {
    const hideMessageAction = {
      type: types.MessageAction.HIDE_MESSAGE,
    };
    expect(message({}, hideMessageAction)).toEqual({
      open: false,
    });
  });
});

describe('templateList reducer', () => {
  it('returns the initial state', () => {
    expect(templateList({}, initialStateAction)).toEqual({});
  });

  it('handles add template', () => {
    const someTemplate = {
      activity: 'development',
      id: 'someId',
      name: 'template name',
      organization_id: 'ioet',
      person_id: 'somePersonId',
      project_id: 'bpm',
    };

    const addOneTemplateAction = {
      type: types.TemplateAction.ADD_TEMPLATE,
      template: someTemplate,
    };
    expect(templateList({}, addOneTemplateAction)).toEqual({
      [someTemplate.id]: someTemplate,
    });
  });

  it('handles add templates', () => {
    const someTemplate = {
      activity: 'development',
      id: 'someId',
      name: 'template name',
      organization_id: 'ioet',
      person_id: 'somePersonId',
      project_id: 'bpm',
    };
    const someOtherTemplate = {
      activity: 'meeting',
      id: 'someOtherId',
      name: 'template name',
      organization_id: 'ioet',
      person_id: 'somePersonId',
      project_id: 'bpm',
    };

    const addMultipleTemplatesAction = {
      type: types.TemplateAction.ADD_TEMPLATES,
      template: [someTemplate, someOtherTemplate],
    };

    expect(templateList({}, addMultipleTemplatesAction)).toEqual({
      [someTemplate.id]: someTemplate,
      [someOtherTemplate.id]: someOtherTemplate,
    });
  });
});
