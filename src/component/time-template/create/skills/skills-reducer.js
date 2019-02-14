import { ADD_SKILLS } from './skills-actions';
import { arrayToObject } from '../../template-reducer';

const skillsList = (state = {}, action) => {
  switch (action.type) {
    case ADD_SKILLS:
      return {
        ...state,
        ...arrayToObject(action.skills, 'id'),
      };
    default:
      return state;
  }
};

export default skillsList;
