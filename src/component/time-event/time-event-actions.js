import { getCurrentUserId } from '../login-page/login-selector';
import { showMessage } from '../message-snackbar/message-actions';
import EventErrorMessage from './time-event-const';
import PeopleTimeApi from '../apis/PeopleTimeApi';
import { getTimeTemplateNameById, isTimeTemplateActive } from '../time-template/template-selector';


export const SET_ACTIVE_TIME_EVENT = 'SET_ACTIVE_TIME_EVENT';
export const SET_ACTIVE_TIME_EVENT_DURATION = 'SET_ACTIVE_TIME_EVENT_DURATION';

export const setActiveTimeEvent = (timeEvent, templateName) => ({
  type: SET_ACTIVE_TIME_EVENT,
  timeEvent,
  templateName,
});

export const setActiveTimeEventDuration = duration => ({
  type: SET_ACTIVE_TIME_EVENT_DURATION,
  duration,
});

export const getLastActiveTime = () => ((dispatch, getState) => {
  const personId = getCurrentUserId(getState());
  return new PeopleTimeApi().getLastActiveTime(personId)
    .then((response) => {
      const templateName = getTimeTemplateNameById(getState(), response.data[0].template_id);

      dispatch(setActiveTimeEvent(response.data[0], templateName));
    })
    .catch((error) => {
      dispatch(showMessage(EventErrorMessage.FAILED_TO_GET_ACTIVE_TIME_EVENT));
    });
});

export const startEvent = templateId => (
  (dispatch, getState) => {
    const personId = getCurrentUserId(getState());
    return new PeopleTimeApi().startTimeEvent(personId, templateId)
      .then((response) => {
        const templateName = getTimeTemplateNameById(getState(), response.data.template_id);
        dispatch(setActiveTimeEvent(response.data, templateName));
      })
      .catch((error) => {
        dispatch(showMessage(EventErrorMessage.FAILED_TO_START_TIME_EVENT));
      });
  }
);

export const stopEvent = () => (
  (dispatch, getState) => {
    const personId = getCurrentUserId(getState());
    return new PeopleTimeApi().stopTimeEvent(personId)
      .then((response) => {
        const templateName = getTimeTemplateNameById(getState(), response.data.template_id);
        dispatch(setActiveTimeEvent(response.data, templateName));
      })
      .catch((error) => {
        dispatch(showMessage(EventErrorMessage.FAILED_TO_STOP_TIME_EVENT));
      });
  }
);

export const startOrStopEvent = templateId => (
  (dispatch, getState) => {
    const funcToDispatch = (isTimeTemplateActive(getState(), templateId)) ? stopEvent() : startEvent(templateId);
    return dispatch(funcToDispatch);
  }
);
