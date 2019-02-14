import axios from 'axios';

const PROJECTS_API_PATH = '/projects/';

class ProjectsApi {
  constructor() {
    this.organizationsApi = axios;
    this.organizationsApi.defaults.baseURL = process.env.BPM_PROJECTS_API_URL;
    this.organizationsApi.defaults.headers.common['Content-Type'] = 'application/json';
  }

  getAllProjects() {
    return this.organizationsApi.get(PROJECTS_API_PATH);
  }
}

export default ProjectsApi;
