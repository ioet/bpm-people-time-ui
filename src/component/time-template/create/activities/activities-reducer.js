import { arrayToObject } from '../../template-reducer';
import { ADD_ACTIVITIES } from './activities-actions';

const activitiesList = (state = {}, action) => {
  switch (action.type) {
    case ADD_ACTIVITIES:
      return {
        ...state,
        ...arrayToObject(action.activities, 'id'),
      };
    default:
      return state;
  }
};

export default activitiesList;
