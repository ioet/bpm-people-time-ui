import axios from 'axios';

const PEOPLE_API_PATH = '/people';

export default axios.create({
  baseURL: process.env.BPM_PEOPLE_API_URL + PEOPLE_API_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
});
