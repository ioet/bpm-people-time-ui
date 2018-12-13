import expect from 'expect';
import TemplateAction from '../component/time-template/template-action-types';
import { templateList } from '../component/time-template/template-reducer';

const INITIAL_STATE = '@@init';

const initialStateAction = {
  type: INITIAL_STATE,
};

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
      type: TemplateAction.ADD_TEMPLATE,
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
      type: TemplateAction.ADD_TEMPLATES,
      template: [someTemplate, someOtherTemplate],
    };

    expect(templateList({}, addMultipleTemplatesAction)).toEqual({
      [someTemplate.id]: someTemplate,
      [someOtherTemplate.id]: someOtherTemplate,
    });
  });

  it('handles update template', () => {
    const someTemplate = {
      activity: 'development',
      id: 'someId',
      name: 'template name',
      organization_id: 'ioet',
      person_id: 'somePersonId',
      project_id: 'bpm',
    };

    const updateTemplateAction = {
      type: TemplateAction.UPDATE_TEMPLATE,
      template: someTemplate,
    };
    expect(templateList({}, updateTemplateAction)).toEqual({
      [someTemplate.id]: someTemplate,
    });
  });

  it('handles remove template', () => {
    const someTemplate = {
      activity: 'development',
      id: 'someId',
      name: 'template name',
      organization_id: 'ioet',
      person_id: 'somePersonId',
      project_id: 'bpm',
    };

    const removeTemplateAction = {
      type: TemplateAction.REMOVE_TEMPLATE,
      templateId: someTemplate.id,
    };
    expect(templateList({
      [someTemplate.id]: someTemplate,
    }, removeTemplateAction)).toEqual({});
  });
});
