import { showMessage } from '../../../message-snackbar/message-actions';
import OrganizationsApi from '../../../apis/OrganizationsApi';
import { OrganizationsError } from './organizations-constants';

export const ADD_ORGANIZATIONS = 'ADD_ORGANIZATIONS';

export const addOrganizations = organizations => ({
  type: ADD_ORGANIZATIONS,
  organizations,
});

export const getAllOrganizations = () => (
  dispatch => new OrganizationsApi().getAllOrganizations()
    .then((response) => {
      dispatch(addOrganizations(response.data));
    })
    .catch((error) => {
      dispatch(showMessage(OrganizationsError.FAILED_TO_LOAD_ORGANIZATIONS));
    })
);
