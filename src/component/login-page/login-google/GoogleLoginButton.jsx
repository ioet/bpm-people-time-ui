import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import GoogleLogin from 'react-google-login';
import GoogleLoginConst from './google-login-const';
import GoogleLoginStyles from './google-login-styles';

const GoogleLoginButton = (props) => {
  const { classes, googleResponseSuccessful, googleResponseFailed } = props;

  return (
    <GoogleLogin
      className={classes.root}
      clientId={GoogleLoginConst.GOOGLE_CLIENT_ID}
      buttonText={GoogleLoginConst.LOGIN_BUTTON_TEXT}
      onSuccess={googleResponseSuccessful}
      onFailure={googleResponseFailed}
      hostedDomain={GoogleLoginConst.IOET_DOMAIN}
    />
  );
};

GoogleLoginButton.propTypes = {
  classes: PropTypes.object.isRequired,
  googleResponseSuccessful: PropTypes.func.isRequired,
  googleResponseFailed: PropTypes.func.isRequired,
};

export default withStyles(GoogleLoginStyles)(GoogleLoginButton);
