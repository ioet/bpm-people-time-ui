import { combineReducers } from 'redux';
import login from './component/login-page/login-reducer';
import message from './component/message-snackbar/message-reducer';
import templateList from './component/time-template/template-reducer';
import createTemplate from './component/time-template/create/create-template-reducer';
import textFields from './component/bpm-text-field/text-field-reducer';
import timeEvent from './component/time-event/time-event-reducer';

const rootReducer = combineReducers({
  login,
  message,
  templateList,
  createTemplate,
  textFields,
  timeEvent,
});

export default rootReducer;
