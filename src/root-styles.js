import { createMuiTheme } from '@material-ui/core';
import { amber, indigo } from '@material-ui/core/colors';

const RootTheme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: indigo,
  },
  typography: {
    useNextVariants: true,
  },
});

export default RootTheme;
