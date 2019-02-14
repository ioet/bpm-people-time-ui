import axios from 'axios';

const PEOPLE_TIME_TIME_TEMPLATES = '/time-templates';
const PEOPLE_TIME_TIME_EVENTS = '/time-events';
const START_TIME_EVENT = '/start';
const STOP_TIME_EVENT = '/stop';

class PeopleTimeApi {
  constructor() {
    this.peopleTimeApi = axios;
    this.peopleTimeApi.defaults.baseURL = process.env.BPM_PEOPLE_TIME_API_URL;
    this.peopleTimeApi.defaults.headers.common['Content-Type'] = 'application/json';
  }

  getTimeTemplatesForUser(personId) {
    return this.peopleTimeApi.get(`${PEOPLE_TIME_TIME_TEMPLATES}?personId=${personId}`);
  }

  createTimeTemplate(template) {
    return this.peopleTimeApi.post(PEOPLE_TIME_TIME_TEMPLATES, { ...template });
  }

  startTimeEvent(personId, templateId) {
    return this.peopleTimeApi.post(
      `${PEOPLE_TIME_TIME_EVENTS + START_TIME_EVENT}?personId=${personId}&templateId=${templateId}`,
    );
  }

  stopTimeEvent(personId) {
    return this.peopleTimeApi.post(
      `${PEOPLE_TIME_TIME_EVENTS + STOP_TIME_EVENT}?personId=${personId}`,
    );
  }

  getLastActiveTime(personId) {
    return this.peopleTimeApi.get(`${PEOPLE_TIME_TIME_EVENTS}?personId=${personId}&lastActive=true`);
  }
}

export default PeopleTimeApi;
