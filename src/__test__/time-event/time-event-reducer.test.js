import expect from 'expect';
import { SET_ACTIVE_TIME_EVENT, SET_ACTIVE_TIME_EVENT_DURATION } from '../../component/time-event/time-event-actions';
import reducer from '../../component/time-event/time-event-reducer';

const INITIAL_STATE = '@@INIT';

const initialStateAction = {
  type: INITIAL_STATE,
};

describe('time-event reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, initialStateAction)).toEqual({});
  });

  it('handles set_active_time_event', () => {
    const timeEvent = {
      name: 'some name',
      activity: 'some activity',
      start_time: 23,
      stop_time: 24,
      duration: 1,
    };
    const templateName = 'name';
    const setActiveTimeEventAction = {
      type: SET_ACTIVE_TIME_EVENT,
      timeEvent,
    };
    expect(reducer({}, setActiveTimeEventAction)).toEqual(
      timeEvent, templateName,
    );
  });

  it('handles set_active_time_event when the stop time is null', () => {
    const timeEvent = {
      name: 'some name',
      activity: 'some activity',
      start_time: 23,
      stop_time: null,
      duration: new Date().getTime() - 23,
    };
    const templateName = 'name';
    const setActiveTimeEventAction = {
      type: SET_ACTIVE_TIME_EVENT,
      timeEvent,
    };
    expect(reducer({}, setActiveTimeEventAction)).toEqual(
      timeEvent, templateName,
    );
  });

  it('handles set_active_time_event_duration', () => {
    const { duration } = 2;
    const setActiveTimeEventDuration = {
      type: SET_ACTIVE_TIME_EVENT_DURATION,
    };
    expect(reducer(undefined, setActiveTimeEventDuration)).toEqual({ duration });
  });

  it('handles the stop time when is null', () => {
    const { duration } = 4;
    const timeEvent = {
      stop_time: null,
    };
    expect(reducer(undefined, timeEvent)).toEqual({ duration });
  });
});
