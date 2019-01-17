export const isCreateDialogOpen = state => state.createTemplate.open;

export const getTemplateToCreate = state => state.createTemplate.templateToCreate;

export const getTemplateToCreateValue = (state, field) => state.createTemplate.templateToCreate[field];
