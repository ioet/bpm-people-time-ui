import expect from 'expect';
import Cookie from '../cookies/Cookie';

describe('login actions', () => {
  const COOKIE_NAME = 'testCookieName';
  const COOKIE_VALUE = 'testCookieValue';

  it('Creates a cookie and checks if it does exist', () => {
    Cookie.setCookie(COOKIE_NAME, COOKIE_VALUE, 1);

    expect(Cookie.doesCookieExist(COOKIE_NAME)).toBe(true);
  });

  it('Creates a cookie and checks if the value is correct', () => {
    Cookie.setCookie(COOKIE_NAME, COOKIE_VALUE, 1);

    expect(Cookie.getCookie(COOKIE_NAME)).toEqual(COOKIE_VALUE);
  });

  it('Checks if cookie is deleted', () => {
    Cookie.setCookie(COOKIE_NAME, COOKIE_VALUE, 1);
    expect(Cookie.doesCookieExist(COOKIE_NAME)).toBe(true);

    Cookie.removeCookie(COOKIE_NAME);
    expect(Cookie.doesCookieExist(COOKIE_NAME)).toBe(false);
  });
});
