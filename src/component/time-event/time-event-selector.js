export const getTimeEvent = state => state.timeEvent;

export const isTimeEventActive = state => state.timeEvent.stop_time === null;
