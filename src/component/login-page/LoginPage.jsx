import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Redirect, Route } from 'react-router-dom';
import LoginStyles from './login-styles';
import GoogleLoginButtonContainer from './login-google/GoogleLoginButtonContainer';
import { LoginPageConst } from './login-const';

const LoginPage = (props) => {
  const { classes, isLoggedIn } = props;

  let componentToRender = null;

  if (isLoggedIn) {
    componentToRender = (
      <Redirect to={{ pathname: '/' }} />
    );
  } else {
    componentToRender = (
      <div className={classes.root}>
        <Typography className={classes.heading} variant="h5" component="h3">
          {LoginPageConst.TITLE}
        </Typography>
        <GoogleLoginButtonContainer />
      </div>
    );
  }

  return (
    <Route
      render={() => componentToRender}
    />
  );
};

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default withStyles(LoginStyles)(LoginPage);
