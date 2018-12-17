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
import CookieHandler from './cookies/CookieHandler';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware),
  ),
);

// export const userId = 'a7c759a7-190d-47e9-baf7-ed89b4de9783';
//
// store.dispatch(getTimeTemplates(userId));

const loginCookie = new CookieHandler(LoginStateConst.TOKEN_KEY);
if (loginCookie.doesCookieExist()) {
  store.dispatch(performLogin(loginCookie.getCookie()));
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
