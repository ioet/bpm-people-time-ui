import { getCurrentUserId } from '../../login-page/login-selector';
import { getOrganizationNameById } from './organizations/organizations-selector';
import { getProjectNameById } from './projects/projects-selector';

export const isCreateDialogOpen = state => state.createTemplate.open;

export const getTemplateToCreate = state => ({
  ...state.createTemplate.templateToCreate,
  person_id: getCurrentUserId(state),
  organization_name: getOrganizationNameById(state, state.createTemplate.templateToCreate.organization_id),
  project_name: getProjectNameById(state, state.createTemplate.templateToCreate.project_id),
  skills: [
    ...state.createTemplate.templateToCreate.skills.map(id => ({
      id,
      name: state.skillsList[id].name,
    })),
  ],
});

export const getTemplateToCreateValue = (state, field) => state.createTemplate.templateToCreate[field];
