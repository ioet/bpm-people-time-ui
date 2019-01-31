import {SET_ACTIVE_TIME_EVENT, SET_ACTIVE_TIME_EVENT_DURATION} from './time-event-actions';

const initializeDuration = (startTime, stopTime) => {
  let duration;

  if (stopTime == null) {
    const currentTime = new Date().getTime();
    duration = currentTime - startTime;
  } else {
    duration = stopTime - startTime;
  }
  return duration;
};

const timeEventReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ACTIVE_TIME_EVENT:
      return {
        ...action.timeEvent,
        duration: initializeDuration(action.timeEvent.start_time, action.timeEvent.stop_time),
        templateName: action.templateName,
      };
    case SET_ACTIVE_TIME_EVENT_DURATION:
      return {
        ...state,
        duration: action.duration,
      };
    default:
      return state;
  }
};

export default timeEventReducer;

