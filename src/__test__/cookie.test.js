import expect from 'expect';
import Cookie from '../cookies/Cookie';

describe('login actions', () => {
  const COOKIE_NAME = 'testCookieName';
  const COOKIE_VALUE = 'testCookieValue';

  it('Creates a cookie and checks if it does exist', () => {
    const testCookie = new Cookie(COOKIE_NAME);
    testCookie.setValue(COOKIE_VALUE, 1);

    expect(testCookie.isStored()).toBe(true);
  });

  it('Creates a cookie and checks if the value is correct', () => {
    const testCookie = new Cookie(COOKIE_NAME);
    testCookie.setValue(COOKIE_VALUE, 1);

    expect(testCookie.getValue()).toEqual(COOKIE_VALUE);
  });

  it('Checks if cookie is deleted', () => {
    const testCookie = new Cookie(COOKIE_NAME);
    testCookie.setValue(COOKIE_VALUE, 1);
    expect(testCookie.isStored()).toBe(true);

    testCookie.remove();
    expect(testCookie.isStored()).toBe(false);
  });
});
