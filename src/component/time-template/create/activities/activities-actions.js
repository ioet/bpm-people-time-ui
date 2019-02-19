import { showMessage } from '../../../message-snackbar/message-actions';
import PeopleTimeApi from '../../../../apis/PeopleTimeApi';
import { ActivitiesError } from './activities-constants';

export const ADD_ACTIVITIES = 'ADD_ACTIVITIES';

export const addActivities = activities => ({
  type: ADD_ACTIVITIES,
  activities,
});

export const getAllActivities = () => (
  dispatch => new PeopleTimeApi().getAllActivities()
    .then((response) => {
      dispatch(addActivities(response.data));
    })
    .catch((error) => {
      dispatch(showMessage(ActivitiesError.FAILED_TO_LOAD_ACTIVITIES));
    })
);
