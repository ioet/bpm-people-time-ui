/* eslint-disable no-plusplus */
import { combineReducers } from 'redux';
import { login } from './component/login-page/login-reducer';
import { message } from './component/message-snackbar/message-reducer';
import { templateList } from './component/time-template/template-reducer';

const rootReducer = combineReducers({
  login,
  message,
  templateList,
});

export default rootReducer;
