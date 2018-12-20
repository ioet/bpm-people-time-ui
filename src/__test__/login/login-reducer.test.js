import expect from 'expect';
import { DEFAULT_USER_ID, loginReducer } from '../../component/login-page/login-reducer';
import LoginAction from '../../component/login-page/login-action-types';

const INITIAL_STATE = '@@INIT';

const initialStateAction = {
  type: INITIAL_STATE,
};

describe('loginReducer reducer', () => {
  it('returns the initial state', () => {
    expect(loginReducer(undefined, initialStateAction))
      .toEqual({
        isLoggedIn: false,
      });
  });

  it('log a user in', () => {
    const loginToken = 'testToken';
    const performLoginAction = {
      type: LoginAction.PERFORM_LOGIN,
      loginToken,
    };
    expect(loginReducer({}, performLoginAction)).toEqual({
      isLoggedIn: true,
      loginToken,
      userId: DEFAULT_USER_ID,
    });
  });

  it('log a user out ', () => {
    const performLogoutAction = {
      type: LoginAction.PERFORM_LOGOUT,
    };
    expect(loginReducer({}, performLogoutAction)).toEqual({
      isLoggedIn: false,
    });
  });
});
