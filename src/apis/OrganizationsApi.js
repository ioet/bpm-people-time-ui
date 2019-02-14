import axios from 'axios';

const ORGANIZATIONS_API_PATH = '/organizations';

class OrganizationsApi {
  constructor() {
    this.organizationsApi = axios;
    this.organizationsApi.defaults.baseURL = process.env.BPM_ORGANIZATIONS_API_URL;
    this.organizationsApi.defaults.headers.common['Content-Type'] = 'application/json';
  }

  getAllOrganizations() {
    return this.organizationsApi.get(ORGANIZATIONS_API_PATH);
  }
}

export default OrganizationsApi;
