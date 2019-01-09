import { ApiClient } from 'swagger_bpm_people_time_api';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import nock from 'nock';
import {
  closeCreateTemplateDialog,
  HIDE_CREATE_TEMPLATE_DIALOG,
  hideCreateDialog,
  SHOW_CREATE_TEMPLATE_DIALOG,
  showCreateDialog,
} from '../../component/time-template/create/create-template-actions';
import { CLEAR_TEXT_FIELDS } from '../../component/bpm-text-field/text-field-actions';
import TemplateAction from '../../component/time-template/template-action-types';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const timeTemplateApi = new ApiClient();

describe('Tests create template actions', () => {
  it('Creates an action to open the creation dialog', () => {
    const expectedAction = {
      type: SHOW_CREATE_TEMPLATE_DIALOG,
    };

    expect(showCreateDialog()).toEqual(expectedAction);
  });

  it('Creates an action to close the creation dialog', () => {
    const expectedAction = {
      type: HIDE_CREATE_TEMPLATE_DIALOG,
    };

    expect(hideCreateDialog()).toEqual(expectedAction);
  });

  it('When cancelling the dialog actions to close and remove the inputs are dispatched', () => {
    const expectedAction = [
      {
        type: HIDE_CREATE_TEMPLATE_DIALOG,
      },
      {
        type: CLEAR_TEXT_FIELDS,
      },
    ];

    const store = mockStore({});

    store.dispatch(closeCreateTemplateDialog(false));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('When submitting the dialog actions to close the dialog and to add a template are dispatched', () => {
    const postTemplateMock = {
      activity: 'some activity',
      id: 'someId',
      name: 'User Name',
      organization_id: 'organizationId',
      organization_name: 'organization name',
      person_id: 'personId',
      project_id: 'projectId',
      project_name: 'project name',
      skills: [
        {
          id: 'skillId',
          name: 'skill name',
        },
      ],
    };
    const expectedAction = [
      {
        type: TemplateAction.ADD_TEMPLATE,
        template: postTemplateMock,
      },
      {
        type: HIDE_CREATE_TEMPLATE_DIALOG,
      },
      {
        type: CLEAR_TEXT_FIELDS,
      },
    ];

    nock(timeTemplateApi.basePath)
      .post('/time-templates')
      .reply(200, postTemplateMock);

    const store = mockStore({
      createTemplate: {
        createdTemplate: {
          name: 'someName',
          activity: 'someActivity',
        },
      },
    });

    return store.dispatch(closeCreateTemplateDialog(true))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
