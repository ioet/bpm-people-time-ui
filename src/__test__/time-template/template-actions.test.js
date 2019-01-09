import { ApiClient } from 'swagger_bpm_people_time_api';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import nock from 'nock';
import TemplateAction from '../../component/time-template/template-action-types';
import { getTimeTemplates } from '../../component/time-template/template-actions';
import MessageAction from '../../component/message-snackbar/message-action-types';
import { TemplateErrorMessage } from '../../component/time-template/template-const';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const timeTemplateApi = new ApiClient();

describe('Test template actions', () => {
  it('creates ADD_TEMPLATES when getting all time templates was successful', () => {
    const userId = 'someId';
    const getTemplatesMock = [
      {
        activity: 'some activity',
        id: 'someId',
        name: 'User Name',
        organization_id: 'organizationId',
        organization_name: 'organization name',
        person_id: 'personId',
        project_id: 'projectId',
        project_name: 'project name',
        skills: [
          {
            id: 'skillId',
            name: 'skill name',
          },
        ],
      },
      {
        activity: 'some other activity',
        id: 'someOtherId',
        name: 'Other User Name',
        organization_id: 'otherOrganizationId',
        organization_name: 'other Organization name',
        person_id: 'otherPersonId',
        project_id: 'otherProjectId',
        project_name: 'other project name',
        skills: [
          {
            id: 'otherSkillId',
            name: 'other skill name',
          },
        ],
      },
    ];

    nock(timeTemplateApi.basePath)
      .get('/time-templates')
      .query({ personId: userId })
      .reply(200, getTemplatesMock);

    const expectedActions = [
      {
        type: TemplateAction.ADD_TEMPLATES,
        template: getTemplatesMock,
      },
    ];

    const store = mockStore({
      login: {
        userId,
      },
    });

    return store.dispatch(getTimeTemplates())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates an action to show an error message when creating a template was NOT successful', () => {
    const userId = 'someId';

    nock(timeTemplateApi.basePath)
      .get('/time-templates')
      .query({ personId: userId })
      .reply(404);

    const expectedActions = [
      {
        type: MessageAction.SHOW_MESSAGE,
        message: TemplateErrorMessage.FAILED_TO_LOAD_TIME_TEMPLATES,
      },
    ];

    const store = mockStore({
      login: {
        userId,
      },
    });

    return store.dispatch(getTimeTemplates())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
