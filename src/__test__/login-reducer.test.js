import expect from 'expect';
import { login } from '../component/login-page/login-reducer';
import LoginAction from '../component/login-page/login-action-types';

const INITIAL_STATE = '@@init';

const initialStateAction = {
  type: INITIAL_STATE,
};

describe('login reducer', () => {
  it('returns the initial state', () => {
    expect(login(undefined, initialStateAction))
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
    expect(login({}, performLoginAction)).toEqual({
      isLoggedIn: true,
      loginToken,
    });
  });

  it('log a user out ', () => {
    const performLogoutAction = {
      type: LoginAction.PERFORM_LOGOUT,
    };
    expect(login({}, performLogoutAction)).toEqual({
      isLoggedIn: false,
    });
  });
});
