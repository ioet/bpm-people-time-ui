import { SET_ACTIVE_TIME_EVENT } from './time-event-actions';

const timeEventReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ACTIVE_TIME_EVENT:
      return action.timeEvent;
    default:
      return state;
  }
};

export default timeEventReducer;
