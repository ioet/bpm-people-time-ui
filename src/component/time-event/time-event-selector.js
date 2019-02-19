import { getActivityNameById } from '../time-template/create/activities/activities-selector';

export const getTimeEvent = state => ({
  ...state.timeEvent,
  activityName: getActivityNameById(state, state.timeEvent.activity),
});

export const isTimeEventActive = state => state.timeEvent.stop_time === null;
