import expect from 'expect';
import activitiesList from '../../../../component/time-template/create/activities/activities-reducer';
import { ADD_ACTIVITIES } from '../../../../component/time-template/create/activities/activities-actions';

const INITIAL_STATE = '@@INIT';

const initialStateAction = {
  type: INITIAL_STATE,
};

describe('activitiesList reducer', () => {
  it('returns the initial state', () => {
    expect(activitiesList({}, initialStateAction))
      .toEqual({});
  });

  it('handles add activities', () => {
    const someActivity = {
      id: 'someId',
      name: 'activitiy name',
    };
    const someOtherActivity = {
      id: 'someOtherId',
      name: 'activity name',
    };

    const addMultipleActivitiesAction = {
      type: ADD_ACTIVITIES,
      activities: [someActivity, someOtherActivity],
    };

    expect(activitiesList({}, addMultipleActivitiesAction))
      .toEqual({
        [someActivity.id]: someActivity,
        [someOtherActivity.id]: someOtherActivity,
      });
  });
});
