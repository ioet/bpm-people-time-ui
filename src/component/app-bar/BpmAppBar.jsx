import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { PowerSettingsNew } from '@material-ui/icons';
import { withStyles } from '@material-ui/core';
import BpmAppBarStyles from './bpm-app-bar-styles';
import AppConst from './bpm-app-bar-const';

const BpmAppBar = (props) => {
  const { classes, isLoggedIn, performLogout } = props;

  const logoutButton = (isLoggedIn)
    ? (
      <IconButton
        aria-owns="menu-appbar"
        onClick={performLogout}
        color="inherit"
      >
        <PowerSettingsNew />
      </IconButton>
    )
    : null;

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography className={classes.root} variant="h6" color="inherit">
          {AppConst.APP_TITLE}
        </Typography>
        {logoutButton}
      </Toolbar>
    </AppBar>
  );
};

BpmAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  performLogout: PropTypes.func.isRequired,
};

export default withStyles(BpmAppBarStyles)(BpmAppBar);
