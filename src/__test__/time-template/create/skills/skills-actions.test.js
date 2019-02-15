import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import MessageAction from '../../../../component/message-snackbar/message-action-types';
import { ADD_SKILLS, addSkills, getAllSkills } from '../../../../component/time-template/create/skills/skills-actions';
import { SkillsError } from '../../../../component/time-template/create/skills/skills-constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test plain skills actions', () => {
  it('tests the add skills action', () => {
    const skills = [
      {
        id: 'someId',
        name: 'Skill Name',
      },
      {
        id: 'someOtherId',
        name: 'Other Skill Name',
      },
    ];

    const expectedAction = {
      type: ADD_SKILLS,
      skills,
    };

    expect(addSkills(skills))
      .toEqual(expectedAction);
  });
});

describe('Test async skills actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates ADD_SKILLS when getting all skills was successful', () => {
    const userId = 'someId';
    const getSkillsMock = [
      {
        id: 'someId',
        name: 'Skill Name',
      },
      {
        id: 'someOtherId',
        name: 'Other Skill Name',
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getSkillsMock,
      });
    });

    const expectedActions = [
      {
        type: ADD_SKILLS,
        skills: getSkillsMock,
      },
    ];

    const store = mockStore({
      login: {
        userId,
      },
    });

    return store.dispatch(getAllSkills())
      .then(() => {
        expect(store.getActions())
          .toEqual(expectedActions);
      });
  });

  it('creates an action to show an error message when getting skills was not successful', () => {
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
        message: SkillsError.FAILED_TO_LOAD_SKILLS,
      },
    ];

    const store = mockStore({
      login: {
        userId,
      },
    });

    return store.dispatch(getAllSkills())
      .then(() => {
        expect(store.getActions())
          .toEqual(expectedActions);
      });
  });
});
