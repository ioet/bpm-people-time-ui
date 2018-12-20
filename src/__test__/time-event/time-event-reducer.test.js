import expect from 'expect';
import { SET_ACTIVE_TIME_EVENT } from '../../component/time-event/time-event-actions';
import reducer from '../../component/time-event/time-event-reducer';

const INITIAL_STATE = '@@INIT';

const initialStateAction = {
  type: INITIAL_STATE,
};

describe('time-event reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, initialStateAction))
      .toEqual({});
  });

  it('handles set_active_time_event', () => {
    const timeEvent = {
      name: 'some name',
      activity: 'some activity',
    };
    const setActiveTimeEventAction = {
      type: SET_ACTIVE_TIME_EVENT,
      timeEvent,
    };
    expect(reducer({}, setActiveTimeEventAction)).toEqual(
      timeEvent,
    );
  });
});
