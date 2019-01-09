import { TimeEventControllerApi } from 'swagger_bpm_people_time_api';
import { getCurrentUserId } from '../login-page/login-selector';
import { showMessage } from '../message-snackbar/message-actions';
import EventErrorMessage from './time-event-const';
import { isTimeTemplateActive } from '../time-template/template-selector';

export const SET_ACTIVE_TIME_EVENT = 'SET_ACTIVE_TIME_EVENT';

const timeEventApi = new TimeEventControllerApi();

export const setActiveTimeEvent = timeEvent => ({
  type: SET_ACTIVE_TIME_EVENT,
  timeEvent,
});

export const startEvent = templateId => (
  (dispatch, getState) => {
    const userId = getCurrentUserId(getState());
    return timeEventApi.startTimeEventUsingPOST(userId, templateId)
      .then((data) => {
        dispatch(setActiveTimeEvent(data));
      })
      .catch((error) => {
        dispatch(showMessage(EventErrorMessage.FAILED_TO_START_TIME_EVENT));
      });
  }
);

export const stopEvent = () => (
  (dispatch, getState) => {
    const userId = getCurrentUserId(getState());
    return timeEventApi.stopTimeEventUsingPOST(userId)
      .then((data) => {
        dispatch(setActiveTimeEvent(data));
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
