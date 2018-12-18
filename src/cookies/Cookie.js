class Cookie {
  static setCookie(name, value, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${date.toGMTString()}`;
  }

  static getCookie(name) {
    const cookieName = `${name}=`;
    const allCookies = document.cookie.split(';');
    for (let i = 0; i < allCookies.length; i++) {
      let c = allCookies[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(cookieName) === 0) return c.substring(cookieName.length, c.length);
    }
    return null;
  }

  static doesCookieExist(name) {
    return Cookie.getCookie(name) !== null;
  }

  static removeCookie(name) {
    Cookie.setCookie(name, '', -1);
  }
}

export default Cookie;
