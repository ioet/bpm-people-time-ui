import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import {
  ADD_ORGANIZATIONS,
  addOrganizations,
  getAllOrganizations,
} from '../../../../component/time-template/create/organizations/organizations-actions';
import MessageAction from '../../../../component/message-snackbar/message-action-types';
import { OrganizationsError } from '../../../../component/time-template/create/organizations/organizations-constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test plain organizations actions', () => {
  it('tests the add organizations action', () => {
    const organizations = [
      {
        id: 'someId',
        name: 'Organization Name',
      },
      {
        id: 'someOtherId',
        name: 'Other Organization Name',
      },
    ];

    const expectedAction = {
      type: ADD_ORGANIZATIONS,
      organizations,
    };

    expect(addOrganizations(organizations))
      .toEqual(expectedAction);
  });
});

describe('Test async organizations actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates ADD_ORGANIZATIONS when getting all organizations was successful', () => {
    const userId = 'someId';
    const getOrganizationsMock = [
      {
        id: 'someId',
        name: 'Organization Name',
      },
      {
        id: 'someOtherId',
        name: 'Other Organization Name',
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getOrganizationsMock,
      });
    });

    const expectedActions = [
      {
        type: ADD_ORGANIZATIONS,
        organizations: getOrganizationsMock,
      },
    ];

    const store = mockStore({
      login: {
        userId,
      },
    });

    return store.dispatch(getAllOrganizations())
      .then(() => {
        expect(store.getActions())
          .toEqual(expectedActions);
      });
  });

  it('creates an action to show an error message when getting organizations was not successful', () => {
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
        message: OrganizationsError.FAILED_TO_LOAD_ORGANIZATIONS,
      },
    ];

    const store = mockStore({
      login: {
        userId,
      },
    });

    return store.dispatch(getAllOrganizations())
      .then(() => {
        expect(store.getActions())
          .toEqual(expectedActions);
      });
  });
});
