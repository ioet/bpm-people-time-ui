import { showMessage } from '../message-snackbar/message-actions';
import TemplateAction from './template-action-types';
import { TemplateErrorMessage } from './template-const';
import { getCurrentUserId } from '../login-page/login-selector';
import PeopleTimeApi from '../../apis/PeopleTimeApi';
import { getLastActiveTime } from '../time-event/time-event-actions';

export const addTimeTemplates = templates => ({
  type: TemplateAction.ADD_TEMPLATES,
  templates,
});

export const getTimeTemplates = () => (
  (dispatch, getState) => {
    const personId = getCurrentUserId(getState());
    return new PeopleTimeApi().getTimeTemplatesForUser(personId)
      .then((response) => {
        dispatch(addTimeTemplates(response.data));
        dispatch(getLastActiveTime());
      })
      .catch((error) => {
        dispatch(showMessage(TemplateErrorMessage.FAILED_TO_LOAD_TIME_TEMPLATES));
      });
  }
);
