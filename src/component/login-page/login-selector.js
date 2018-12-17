import { LoginStateConst } from './login-const';
import CookieHandler from '../../cookies/CookieHandler';

export const isUserLoggedIn = state => (
  state.login.isLoggedIn && new CookieHandler(LoginStateConst.TOKEN_KEY).doesCookieExist()
);
