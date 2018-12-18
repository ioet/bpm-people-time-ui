import { LoginStateConst } from './login-const';
import Cookie from '../../cookies/Cookie';

export const isUserLoggedIn = state => (
  state.login.isLoggedIn && Cookie.doesCookieExist(LoginStateConst.TOKEN_KEY)
);
