import { createMuiTheme } from '@material-ui/core';
import { amber, indigo } from '@material-ui/core/colors';

export const RootTheme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: indigo,
  },
  typography: {
    useNextVariants: true,
  },
});

export const FabStyles = () => ({
  fab: {
    position: 'fixed',
    bottom: '3%',
    right: '5%',
  },
});

export const SnackbarStyles = theme => ({
  snackbar: {
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing.unit * 3,
    },
  },
});
