import axios from 'axios';

const PEOPLE_API_PATH = '/people';

class PeopleApi {
  constructor() {
    this.peopleApi = axios;
    this.peopleApi.defaults.baseURL = process.env.BPM_PEOPLE_API_URL;
    this.peopleApi.defaults.headers.common['Content-Type'] = 'application/json';
  }

  getUserByEmail(email) {
    return this.peopleApi.get(`${PEOPLE_API_PATH}?email=${email}`);
  }

  createNewUser(userEmail, userName) {
    return this.peopleApi.post(PEOPLE_API_PATH, {
      name: userName,
      authentication_identity: userEmail,
    });
  }
}

export default PeopleApi;
