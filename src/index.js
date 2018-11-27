/* eslint-disable no-plusplus,no-undef,react/jsx-tag-spacing */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import 'typeface-roboto';
import App from './App';
import rootReducer from './reducers';
import {getTimeTemplates} from './actions';
import {RootTheme} from './styles';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware),
  ),
);

export const userId = 'a7c759a7-190d-47e9-baf7-ed89b4de9783';

store.dispatch(getTimeTemplates(userId));

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={RootTheme}>
        <App/>
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
  );
});
