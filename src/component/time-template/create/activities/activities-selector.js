export const getActivitiesList = state => state.activitiesList;

export const getActivityNameById = (state, id) => {
  if (typeof id === 'undefined' || typeof state.activitiesList[id] === 'undefined') return null;
  return state.activitiesList[id].name;
};
