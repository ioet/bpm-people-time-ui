class CookieHandler {
  constructor(name) {
    this.name = name;
  }

  setCookie(value, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    document.cookie = `${this.name}=${value}; expires=${date.toGMTString()}`;
  }

  getCookie() {
    const cookieName = `${this.name}=`;
    const allCookies = document.cookie.split(';');
    for (let i = 0; i < allCookies.length; i++) {
      let c = allCookies[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(cookieName) === 0) return c.substring(cookieName.length, c.length);
    }
    return null;
  }

  doesCookieExist() {
    return this.getCookie(this.name) !== null;
  }

  removeCookie() {
    this.setCookie(this.name, '', -1);
  }
}

export default CookieHandler;
