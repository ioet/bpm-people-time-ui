import { ADD_PROJECTS } from './projects-actions';
import { arrayToObject } from '../../template-reducer';

const projectsList = (state = { projects: { id: 'enable-cors', name: 'enable CORS' } }, action) => {
  switch (action.type) {
    case ADD_PROJECTS:
      return {
        ...state,
        ...arrayToObject(action.projects, 'uid'),
      };
    default:
      return state;
  }
};

export default projectsList;
