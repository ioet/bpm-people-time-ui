import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { createNewUser, getUserIdByEmail, loginFailed, performLogout, } from '../../component/login-page/login-actions';
import LoginAction from '../../component/login-page/login-action-types';
import { LoginErrorMessage } from '../../component/login-page/login-const';
import MessageAction from '../../component/message-snackbar/message-action-types';
import { isUserLoggedIn } from '../../component/login-page/login-selector';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Login Selectors', () => {
  describe('isUserLoggedIn', () => {
    it('should return login.authenticated as undefined', () => {
      const selected = isUserLoggedIn.state;
      expect(selected);
    });
  });
});

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
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('Creates an action to perform the login', () => {
    const testToken = 'testToken';
    const userEmail = 'test@test.com';
    const userId = '3e938e77-fc73-4571-9545-fa605710333f';
    const getUserMock = [
      {
        created: 1547479012768,
        updated: 1547479012767,
        id: userId,
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
        userId,
        userEmail,
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
        expect(store.getActions())
          .toEqual(expectedAction);
      });
  });

  it('Creates an action to create a user if it does not exist and then performs the login', () => {
    const testToken = 'testToken';
    const userEmail = 'test@test.com';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
      });
    });

    const store = mockStore({
      user: [],
      login: {
        userId: 'someId',
      },
    });

    return store.dispatch(getUserIdByEmail(testToken, userEmail))
      .then(() => {
        expect(store.getActions())
          .toEqual([]);
      });
  });

  it('Handle login failure', () => {
    const testToken = 'testToken';
    const userEmail = 'test@test.com';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
      });
    });

    const expectedAction = [
      {
        type: MessageAction.SHOW_MESSAGE,
        message: LoginErrorMessage.BPM_SERVER_NOT_AVAILABLE,
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
        expect(store.getActions())
          .toEqual(expectedAction);
      });
  });

  it('Creates a new user', () => {
    const testToken = 'testToken';
    const userEmail = 'test@test.com';
    const userName = 'User Name';
    const userId = '3e938e77-fc73-4571-9545-fa605710333f';
    const getUserMock = {
      created: 1547479012768,
      updated: 1547479012767,
      id: userId,
      name: userName,
      authentication_identity: 'acamacho@ioet.com',
      authentication_provider: 'ioet.com',
    };

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
        userId,
        userEmail,
      },
    ];

    const store = mockStore({
      user: [],
      login: {
        userId: 'someId',
      },
    });

    return store.dispatch(createNewUser(testToken, userEmail, userName))
      .then(() => {
        expect(store.getActions())
          .toEqual(expectedAction);
      });
  });

  it('dispatches a message when creating a user fails', () => {
    const testToken = 'testToken';
    const userEmail = 'test@test.com';
    const userName = 'User Name';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
      });
    });

    const expectedAction = [
      {
        type: MessageAction.SHOW_MESSAGE,
        message: LoginErrorMessage.FAILED_TO_CREATE_NEW_USER,
      },
    ];

    const store = mockStore({
      user: [],
      login: {
        userId: 'someId',
      },
    });

    return store.dispatch(createNewUser(testToken, userEmail, userName))
      .then(() => {
        expect(store.getActions())
          .toEqual(expectedAction);
      });
  });
});
