import { LoginStateConst } from './login-const';
import Cookie from '../../cookies/Cookie';

export const isUserLoggedIn = state => (
  state.login.isLoggedIn
  && new Cookie(LoginStateConst.TOKEN_KEY).isStored()
  && new Cookie(LoginStateConst.USER_EMAIL).isStored()
  && new Cookie(LoginStateConst.USER_ID).isStored()
);

export const getCurrentUserId = state => state.login.userId;
