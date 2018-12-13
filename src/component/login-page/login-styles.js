const LoginStyles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
  },
  heading: {
    paddingBottom: theme.spacing.unit * 2,
  },
});

export default LoginStyles;
