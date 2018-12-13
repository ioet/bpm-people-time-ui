import { doesCookieExist } from '../../utils/Utils';
import { LoginStateConst } from './login-const';

export const isUserLoggedIn = state => state.login.isLoggedIn && doesCookieExist(LoginStateConst.TOKEN_KEY);
