import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import MessageSnackbarContainer from './component/container/MessageSnackbarContainer';
import { AppConst } from './constants';

function App() {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {AppConst.APP_TITLE}
          </Typography>
        </Toolbar>
      </AppBar>
      <MessageSnackbarContainer />
    </div>
  );
}

export default App;
