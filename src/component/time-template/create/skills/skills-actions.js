import { showMessage } from '../../../message-snackbar/message-actions';
import SkillsApi from '../../../../apis/SkillsApi';
import { SkillsError } from './skills-constants';

export const ADD_SKILLS = 'ADD_SKILLS';

export const addSkills = skills => ({
  type: ADD_SKILLS,
  skills,
});

export const getAllSkills = () => (
  dispatch => new SkillsApi().getAllSkills()
    .then((response) => {
      dispatch(addSkills(response.data));
    })
    .catch((error) => {
      dispatch(showMessage(SkillsError.FAILED_TO_LOAD_SKILLS));
    })
);
