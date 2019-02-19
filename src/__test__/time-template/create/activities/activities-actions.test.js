import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import MessageAction from '../../../../component/message-snackbar/message-action-types';
import {
  ADD_ACTIVITIES,
  addActivities,
  getAllActivities
} from '../../../../component/time-template/create/activities/activities-actions';
import { ActivitiesError } from '../../../../component/time-template/create/activities/activities-constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test plain activities actions', () => {
  it('tests the add activities action', () => {
    const activities = [
      {
        id: 'someId',
        name: 'Activity Name',
      },
      {
        id: 'someOtherId',
        name: 'Other Activity Name',
      },
    ];

    const expectedAction = {
      type: ADD_ACTIVITIES,
      activities,
    };

    expect(addActivities(activities))
      .toEqual(expectedAction);
  });
});

describe('Test async activities actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates ADD_ACTIVITIES when getting all activities was successful', () => {
    const userId = 'someId';
    const getActivitiesMock = [
      {
        id: 'someId',
        name: 'Activity Name',
      },
      {
        id: 'someOtherId',
        name: 'Other Activity Name',
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getActivitiesMock,
      });
    });

    const expectedActions = [
      {
        type: ADD_ACTIVITIES,
        activities: getActivitiesMock,
      },
    ];

    const store = mockStore({
      login: {
        userId,
      },
    });

    return store.dispatch(getAllActivities())
      .then(() => {
        expect(store.getActions())
          .toEqual(expectedActions);
      });
  });

  it('creates an action to show an error message when getting activities was not successful', () => {
    const userId = 'someId';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
      });
    });

    const expectedActions = [
      {
        type: MessageAction.SHOW_MESSAGE,
        message: ActivitiesError.FAILED_TO_LOAD_ACTIVITIES,
      },
    ];

    const store = mockStore({
      login: {
        userId,
      },
    });

    return store.dispatch(getAllActivities())
      .then(() => {
        expect(store.getActions())
          .toEqual(expectedActions);
      });
  });
});
