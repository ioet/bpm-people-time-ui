import { ADD_ORGANIZATIONS } from './organizations-actions';
import { arrayToObject } from '../../template-reducer';

const organizationsList = (state = {}, action) => {
  switch (action.type) {
    case ADD_ORGANIZATIONS:
      return {
        ...state,
        ...arrayToObject(action.organizations, 'id'),
      };
    default:
      return state;
  }
};

export default organizationsList;
