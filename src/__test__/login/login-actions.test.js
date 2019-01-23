import axios from 'axios';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { getUserIdByEmail, loginFailed, performLogout } from '../../component/login-page/login-actions';
import LoginAction from '../../component/login-page/login-action-types';
import { LoginErrorMessage } from '../../component/login-page/login-const';
import MessageAction from '../../component/message-snackbar/message-action-types';
import { getPeopleApi } from '../../component/axios/axios-instance';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('login actions', () => {
  it('Creates an action to show an error on failure', () => {
    const testToken = 'testToken';
    const expectedAction = [
      {
        type: MessageAction.SHOW_MESSAGE,
        message: LoginErrorMessage.LOGIN_FAILED,
      },
    ];

    const store = mockStore({ user: [] });

    store.dispatch(loginFailed(testToken));
    expect(store.getActions())
      .toEqual(expectedAction);
  });

  it('Creates an action to perform the logout', () => {
    const expectedAction = [
      {
        type: LoginAction.PERFORM_LOGOUT,
      },
    ];

    const store = mockStore({ user: [] });

    store.dispatch(performLogout());
    expect(store.getActions())
      .toEqual(expectedAction);
  });
});

describe('Test async login actions', () => {
  beforeEach(() => {
    moxios.install(getPeopleApi());
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('Creates an action to perform the login', () => {
    const testToken = 'testToken';
    const userEmail = 'test@test.com';
    const getUserMock = [
      {
        created: 1547479012768,
        updated: 1547479012767,
        id: '3e938e77-fc73-4571-9545-fa605710333f',
        name: 'Alexander Camacho',
        authentication_identity: 'acamacho@ioet.com',
        authentication_provider: 'ioet.com',
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getUserMock,
      });
    });

    const expectedAction = [
      {
        type: LoginAction.PERFORM_LOGIN,
        loginToken: testToken,
      },
    ];

    const store = mockStore({
      user: [],
      login: {
        userId: 'someId',
      },
    });

    return store.dispatch(getUserIdByEmail(testToken, userEmail))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
