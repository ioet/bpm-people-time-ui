const LoginStyles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: 0,
    margin: `${theme.spacing.unit * 2}px auto`,
    maxWidth: theme.spacing.unit * 45,
    textAlign: 'center',
  },
  heading: {
    paddingBottom: theme.spacing.unit * 4,
  },
});

export default LoginStyles;
