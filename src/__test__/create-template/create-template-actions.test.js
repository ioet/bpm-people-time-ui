import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import moxios from 'moxios';
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
});

describe('Testing async actions to create a template', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('When submitting the dialog actions to close the dialog and to add a template are dispatched', () => {
    const userId = 'somePersonId';
    const organizationId = 'organizationId';
    const organizationName = 'Organization Name';
    const postTemplateMock = {
      activity: 'some activity',
      id: 'someId',
      name: 'User Name',
      organization_id: organizationId,
      organization_name: organizationName,
      person_id: userId,
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
        type: TemplateAction.ADD_TEMPLATES,
        templates: [postTemplateMock],
      },
      {
        type: HIDE_CREATE_TEMPLATE_DIALOG,
      },
      {
        type: CLEAR_TEXT_FIELDS,
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: postTemplateMock,
      });
    });

    const store = mockStore({
      createTemplate: {
        templateToCreate: {
          name: 'someName',
          activity: 'someActivity',
          organization_id: organizationId,
          skills: [],
        },
      },
      login: {
        userId,
      },
      organizationsList: {
        [organizationId]: {
          name: organizationName,
        },
      },
    });

    return store.dispatch(closeCreateTemplateDialog(true))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
