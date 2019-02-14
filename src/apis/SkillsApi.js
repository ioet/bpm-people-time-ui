import axios from 'axios';

const SKILLS_API_PATH = '/skills';

class SkillsApi {
  constructor() {
    this.skillsApi = axios;
    this.skillsApi.defaults.baseURL = process.env.BPM_SKILLS_API_URL;
    this.skillsApi.defaults.headers.common['Content-Type'] = 'application/json';
  }

  getAllSkills() {
    return this.skillsApi.get(SKILLS_API_PATH);
  }
}

export default SkillsApi;
