import expect from 'expect';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  getActivitiesList,
  getActivityNameById
} from '../../../../component/time-template/create/activities/activities-selector';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test activity selector', () => {
  it('returns the activity list', () => {
    const firstActivityId = 'id-1';
    const secondActivityId = 'id-2';
    const activities = {
      [firstActivityId]: {
        id: firstActivityId,
        name: 'Activity Name',
      },
      [secondActivityId]: {
        id: secondActivityId,
        name: 'Other Activity Name',
      },
    };

    const store = mockStore({
      activitiesList: activities,
    });

    expect(getActivitiesList(store.getState()))
      .toEqual(activities);
  });

  it('returns the activities name for a given id', () => {
    const firstActivityId = 'id-1';
    const secondActivityId = 'id-2';
    const activities = {
      [firstActivityId]: {
        id: firstActivityId,
        name: 'Activity Name',
      },
      [secondActivityId]: {
        id: secondActivityId,
        name: 'Other Activity Name',
      },
    };

    const store = mockStore({
      activitiesList: activities,
    });

    expect(getActivityNameById(store.getState(), firstActivityId))
      .toEqual(activities[firstActivityId].name);
  });
});
