import { LoginStateConst } from './login-const';
import Cookie from '../../cookies/Cookie';

export const isUserLoggedIn = state => (
  state.login.isLoggedIn && new Cookie(LoginStateConst.TOKEN_KEY).isStored()
);
