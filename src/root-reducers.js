import { combineReducers } from 'redux';
import login from './component/login-page/login-reducer';
import message from './component/message-snackbar/message-reducer';
import templateList from './component/time-template/template-reducer';
import createTemplate from './component/time-template/create/create-template-reducer';
import textFields from './component/bpm-text-field/text-field-reducer';
import timeEvent from './component/time-event/time-event-reducer';
import organizationsList from './component/time-template/create/organizations/organizations-reducer';
import projectsList from './component/time-template/create/projects/projects-reducer';
import skillsList from './component/time-template/create/skills/skills-reducer';
import activitiesList from './component/time-template/create/activities/activities-reducer';

const rootReducer = combineReducers({
  login,
  message,
  templateList,
  createTemplate,
  textFields,
  timeEvent,
  organizationsList,
  projectsList,
  skillsList,
  activitiesList,
});

export default rootReducer;
