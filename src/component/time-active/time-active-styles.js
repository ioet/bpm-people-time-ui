const ActiveTimeStyles = theme => ({

  timeActiveTemplate: {
    paddingTop: 2,
    padding: theme.spacing.unit * 3,
    margin: theme.spacing.unit * 2,
  },
  organizationAndProject: {
    marginTop: theme.spacing.unit,
    display: 'inline-block',
  },
  activity: {
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 4,
    display: 'inline-block',
  },
  dayAndMonth: {
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 3,
    display: 'inline-block',
  },
  skills: {
    marginTop: theme.spacing.unit,
  },
  currentlyActiveTimeEvent: {
    color: theme.palette.secondary[500],
    textAlign: 'center',
    margin: 'auto',
  },
});

export default ActiveTimeStyles;
