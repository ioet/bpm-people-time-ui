export const isCreateDialogOpen = state => state.createTemplate.open;

export const getCreatedTemplate = state => state.createTemplate.createdTemplate;

export const getCreatedTemplateValue = (state, field) => state.createTemplate.createdTemplate[field];
