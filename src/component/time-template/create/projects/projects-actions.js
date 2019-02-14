import { showMessage } from '../../../message-snackbar/message-actions';
import { ProjectsError } from './projects-constants';
import ProjectsApi from '../../../apis/ProjectsApi';

export const ADD_PROJECTS = 'ADD_PROJECTS';

export const addProjects = projects => ({
  type: ADD_PROJECTS,
  projects,
});

export const getAllProjects = () => (
  dispatch => new ProjectsApi().getAllProjects()
    .then((response) => {
      dispatch(addProjects(response.data));
    })
    .catch((error) => {
      dispatch(showMessage(ProjectsError.FAILED_TO_LOAD_PROJECTS));
    })
);
