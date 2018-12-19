const TemplateListStyles = theme => ({
  list: {
    paddingTop: 0,
    maxHeight: `${theme.spacing.unit * 10}vh`,
    overflow: 'auto',
  },
  createTimeTemplate: {
    color: theme.palette.secondary[500],
    textAlign: 'right',
    marginRight: theme.spacing.unit * 3,
    cursor: 'pointer',
  },
});

export default TemplateListStyles;
