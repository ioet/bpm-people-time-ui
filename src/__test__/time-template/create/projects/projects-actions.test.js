import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import MessageAction from '../../../../component/message-snackbar/message-action-types';
import {
  ADD_PROJECTS,
  addProjects,
  getAllProjects
} from '../../../../component/time-template/create/projects/projects-actions';
import { ProjectsError } from '../../../../component/time-template/create/projects/projects-constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test plain projects actions', () => {
  it('tests the add projects action', () => {
    const projects = [
      {
        id: 'someId',
        name: 'Project Name',
      },
      {
        id: 'someOtherId',
        name: 'Other Project Name',
      },
    ];

    const expectedAction = {
      type: ADD_PROJECTS,
      projects,
    };

    expect(addProjects(projects))
      .toEqual(expectedAction);
  });
});

describe('Test async projects actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates ADD_PROJECTS when getting all projects was successful', () => {
    const userId = 'someId';
    const getProjectsMock = [
      {
        id: 'someId',
        name: 'Project Name',
      },
      {
        id: 'someOtherId',
        name: 'Other Project Name',
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getProjectsMock,
      });
    });

    const expectedActions = [
      {
        type: ADD_PROJECTS,
        projects: getProjectsMock,
      },
    ];

    const store = mockStore({
      login: {
        userId,
      },
    });

    return store.dispatch(getAllProjects())
      .then(() => {
        expect(store.getActions())
          .toEqual(expectedActions);
      });
  });

  it('creates an action to show an error message when getting projects was not successful', () => {
    const userId = 'someId';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
      });
    });

    const expectedActions = [
      {
        type: MessageAction.SHOW_MESSAGE,
        message: ProjectsError.FAILED_TO_LOAD_PROJECTS,
      },
    ];

    const store = mockStore({
      login: {
        userId,
      },
    });

    return store.dispatch(getAllProjects())
      .then(() => {
        expect(store.getActions())
          .toEqual(expectedActions);
      });
  });
});
