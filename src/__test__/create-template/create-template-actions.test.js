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
import {
  CLEAR_TEXT_FIELDS,
  REMOVE_ALL_INPUT_ERRORS,
  SET_INPUT_ERROR,
} from '../../component/bpm-text-field/text-field-actions';
import TemplateAction from '../../component/time-template/template-action-types';
import MessageAction from '../../component/message-snackbar/message-action-types';
import { DialogContentFieldErros } from '../../component/time-template/create/create-template-const';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Tests create template actions', () => {
  it('Creates an action to open the creation dialog', () => {
    const expectedAction = {
      type: SHOW_CREATE_TEMPLATE_DIALOG,
    };

    expect(showCreateDialog())
      .toEqual(expectedAction);
  });

  it('Creates an action to close the creation dialog', () => {
    const expectedAction = {
      type: HIDE_CREATE_TEMPLATE_DIALOG,
    };

    expect(hideCreateDialog())
      .toEqual(expectedAction);
  });

  it('dispatched actions to close and remove the inputs when cancelling the dialog', () => {
    const expectedAction = [
      {
        type: HIDE_CREATE_TEMPLATE_DIALOG,
      },
      {
        type: CLEAR_TEXT_FIELDS,
      },
      {
        type: REMOVE_ALL_INPUT_ERRORS,
      },
    ];

    const store = mockStore({});

    store.dispatch(closeCreateTemplateDialog(false));
    expect(store.getActions())
      .toEqual(expectedAction);
  });

  it('returns null when an invalid template is provided', () => {
    const userId = 'somePersonId';

    const expectedActions = [
      {
        type: REMOVE_ALL_INPUT_ERRORS,
      },
      {
        type: MessageAction.SHOW_MESSAGE,
        message: DialogContentFieldErros.TEMPLATE_NAME_ERROR,
      },
      {
        type: SET_INPUT_ERROR,
        field: 'name',
      },
    ];
    const store = mockStore({
      login: {
        userId,
      },
      createTemplate: {
        templateToCreate: {},
      },
    });
    store.dispatch(closeCreateTemplateDialog(true));
    expect(store.getActions())
      .toEqual(expectedActions);
  });
});

describe('Testing async actions to create a template', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates actions to close the dialog and to add a template when creating a template successfully', () => {
    const userId = 'somePersonId';
    const organizationId = 'organizationId';
    const organizationName = 'Organization Name';
    const projectId = 'projectId';
    const projectName = 'project name';
    const skillsId = 'skillsId';
    const skillsName = 'skills name';
    const postTemplateMock = {
      activity: 'some activity',
      id: 'someId',
      name: 'User Name',
      organization_id: organizationId,
      organization_name: organizationName,
      person_id: userId,
      project_id: projectId,
      project_name: projectName,
      skills: [
        {
          id: skillsId,
          name: skillsName,
        },
      ],
    };
    const expectedAction = [
      {
        type: REMOVE_ALL_INPUT_ERRORS,
      },
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
          project_id: projectId,
          skills: [
            skillsId,
          ],
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
      projectsList: {
        [projectId]: {
          name: projectName,
        },
      },
      skillsList: {
        [skillsId]: {
          name: skillsName,
        },
      },
    });

    return store.dispatch(closeCreateTemplateDialog(true))
      .then(() => {
        expect(store.getActions())
          .toEqual(expectedAction);
      });
  });

  it('creates actions to show an error message when creating a template fails', () => {
    const userId = 'somePersonId';
    const organizationId = 'organizationId';
    const organizationName = 'Organization Name';
    const projectId = 'projectId';
    const projectName = 'project name';

    const store = mockStore({
      createTemplate: {
        templateToCreate: {
          name: 'someName',
          activity: 'someActivity',
          organization_id: organizationId,
          project_id: projectId,
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
      projectsList: {
        [projectId]: {
          name: projectName,
        },
      },
    });
    expect(store.dispatch(closeCreateTemplateDialog(true)))
      .toEqual(null);
  });
});
