import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import 'typeface-roboto';
import App from './App';
import rootReducer from './root-reducers';
import { performLogin, performLogout } from './component/login-page/login-actions';
import { LoginStateConst } from './component/login-page/login-const';
import RootTheme from './root-styles';
import Cookie from './cookies/Cookie';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware),
  ),
);

const loginCookie = new Cookie(LoginStateConst.TOKEN_KEY);
const emailCookie = new Cookie(LoginStateConst.USER_EMAIL);
const userIdCookie = new Cookie(LoginStateConst.USER_ID);
if (loginCookie.isStored() && emailCookie.isStored() && userIdCookie.isStored()) {
  store.dispatch(performLogin(loginCookie.getValue(), emailCookie.getValue(), userIdCookie.getValue()));
} else {
  store.dispatch(performLogout());
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={RootTheme}>
        <App />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
  );
});
