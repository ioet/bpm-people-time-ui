export const getOrganizationsList = state => state.organizationsList;

export const getOrganizationNameById = (state, id) => state.organizationsList[id].name;
