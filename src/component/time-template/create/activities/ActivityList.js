const activities = [
  'code review',
  'design',
  'development',
  'ioet internal',
  'operations/infrastructure',
  'project management',
  'standup/meeting',
  'training',
  'travel',
  'unbillable/other',
];

const createActivityList = () => {
  const activitiesAsObject = {};
  for (let i = 0; i < activities.length; i++) {
    activitiesAsObject[i] = {
      id: i,
      name: activities[i],
    };
  }
  return activitiesAsObject;
};

export default createActivityList;
