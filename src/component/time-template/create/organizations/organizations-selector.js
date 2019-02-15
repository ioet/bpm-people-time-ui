export const getOrganizationsList = state => state.organizationsList;

export const getOrganizationNameById = (state, id) => {
  if (typeof id === 'undefined') return null;
  return state.organizationsList[id].name;
};
