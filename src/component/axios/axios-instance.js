import axios from 'axios';

export const getPeopleApi = () => {
  const PEOPLE_API_PATH = '/people';
  return axios.create({
    baseURL: process.env.BPM_PEOPLE_API_URL + PEOPLE_API_PATH,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
