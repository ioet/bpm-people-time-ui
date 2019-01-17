import expect from 'expect';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import {
  SET_ACTIVE_TIME_EVENT,
  setActiveTimeEvent,
  startOrStopEvent,
} from '../../component/time-event/time-event-actions';
import MessageAction from '../../component/message-snackbar/message-action-types';
import EventErrorMessage from '../../component/time-event/time-event-const';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Tests time-event actions', () => {
  it('creates an action to set the active time event', () => {
    const timeEvent = {
      id: 'some id',
      activity: 'some activity',
    };

    const expectedActions = {
      type: SET_ACTIVE_TIME_EVENT,
      timeEvent,
    };

    expect(setActiveTimeEvent(timeEvent)).toEqual(expectedActions);
  });
});

describe('Tests async actions for time-events', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates an action to set the active time event after starting it', () => {
    const userId = 'somePersonId';
    const templateId = 'someTemplateId';
    const timeEvent = {
      id: 'some id',
      activity: 'some activity',
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: timeEvent,
      });
    });

    const expectedActions = [
      {
        type: SET_ACTIVE_TIME_EVENT,
        timeEvent,
      },
    ];

    const store = mockStore({
      login: {
        userId,
      },
      timeEvent: {
        template_id: templateId,
        stop_time: 'some time stamp',
      },
    });

    return store.dispatch(startOrStopEvent(templateId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates an action to show a message when starting a time event failed', () => {
    const userId = 'somePersonId';
    const templateId = 'someTemplateId';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
      });
    });

    const expectedActions = [
      {
        type: MessageAction.SHOW_MESSAGE,
        message: EventErrorMessage.FAILED_TO_START_TIME_EVENT,
      },
    ];

    const store = mockStore({
      login: {
        userId,
      },
      timeEvent: {
        template_id: templateId,
        stop_time: 'some time stamp',
      },
    });

    return store.dispatch(startOrStopEvent(templateId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates an action to set the active time event after stopping it', () => {
    const userId = 'somePersonId';
    const templateId = 'someTemplateId';
    const timeEvent = {
      id: 'some id',
      activity: 'some activity',
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: timeEvent,
      });
    });

    const expectedActions = [
      {
        type: SET_ACTIVE_TIME_EVENT,
        timeEvent,
      },
    ];

    const store = mockStore({
      login: {
        userId,
      },
      timeEvent: {
        template_id: templateId,
        stop_time: null,
      },
    });

    return store.dispatch(startOrStopEvent(templateId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates an action to show a message when stopping a time event failed', () => {
    const userId = 'somePersonId';
    const templateId = 'someTemplateId';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
      });
    });

    const expectedActions = [
      {
        type: MessageAction.SHOW_MESSAGE,
        message: EventErrorMessage.FAILED_TO_STOP_TIME_EVENT,
      },
    ];

    const store = mockStore({
      login: {
        userId,
      },
      timeEvent: {
        template_id: templateId,
        stop_time: null,
      },
    });

    return store.dispatch(startOrStopEvent(templateId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
