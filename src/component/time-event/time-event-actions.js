import axios from 'axios';
import { getCurrentUserId } from '../login-page/login-selector';
import { showMessage } from '../message-snackbar/message-actions';
import EventErrorMessage from './time-event-const';
import { isTimeTemplateActive } from '../time-template/template-selector';

export const SET_ACTIVE_TIME_EVENT = 'SET_ACTIVE_TIME_EVENT';

const PEOPLE_TIME_API_PATH = '/time-events';
const START_TIME_EVENT = '/start';
const STOP_TIME_EVENT = '/stop';
axios.defaults.baseURL = process.env.BPM_PEOPLE_TIME_API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const setActiveTimeEvent = timeEvent => ({
  type: SET_ACTIVE_TIME_EVENT,
  timeEvent,
});

export const startEvent = templateId => (
  (dispatch, getState) => {
    const personId = getCurrentUserId(getState());
    return axios.post(PEOPLE_TIME_API_PATH + START_TIME_EVENT, null, {
      params: {
        personId,
        templateId,
      },
    })
      .then((response) => {
        dispatch(setActiveTimeEvent(response.data));
      })
      .catch((error) => {
        dispatch(showMessage(EventErrorMessage.FAILED_TO_START_TIME_EVENT));
      });
  }
);

export const stopEvent = () => (
  (dispatch, getState) => {
    const personId = getCurrentUserId(getState());
    return axios.post(PEOPLE_TIME_API_PATH + STOP_TIME_EVENT, null, {
      params: {
        personId,
      },
    })
      .then((response) => {
        dispatch(setActiveTimeEvent(response.data));
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
