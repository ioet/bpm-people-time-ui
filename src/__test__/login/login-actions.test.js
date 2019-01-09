import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { loginFailed, performLogin, performLogout } from '../../component/login-page/login-actions';
import LoginAction from '../../component/login-page/login-action-types';
import { LoginErrorMessage } from '../../component/login-page/login-const';
import MessageAction from '../../component/message-snackbar/message-action-types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('login actions', () => {
  it('Creates an action to perform the login', () => {
    const testToken = 'testToken';
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

    store.dispatch(performLogin(testToken));
    expect(store.getActions()).toEqual(expectedAction);
  });

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
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('Creates an action to perform the logout', () => {
    const expectedAction = [
      {
        type: LoginAction.PERFORM_LOGOUT,
      },
    ];

    const store = mockStore({ user: [] });

    store.dispatch(performLogout());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
