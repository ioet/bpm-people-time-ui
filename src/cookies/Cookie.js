class Cookie {
  constructor(name) {
    this.name = name;
  }

  setValue(value, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    document.cookie = `${this.name}=${value}; expires=${date.toGMTString()}`;
  }

  getValue() {
    const cookieName = `${this.name}=`;
    const allCookies = document.cookie.split(';');
    for (let i = 0; i < allCookies.length; i++) {
      let c = allCookies[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(cookieName) === 0) return c.substring(cookieName.length, c.length);
    }
    return null;
  }

  isStored() {
    return this.getValue(this.name) !== null;
  }

  remove() {
    this.setValue(this.name, '', -1);
  }
}

export default Cookie;
