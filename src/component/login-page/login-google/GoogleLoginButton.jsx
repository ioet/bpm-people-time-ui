import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import GoogleLoginConst from './google-login-const';

const GoogleLoginButton = (props) => {
  const { googleResponseSuccessful, googleResponseFailed } = props;

  return (
    <GoogleLogin
      clientId={GoogleLoginConst.GOOGLE_CLIENT_ID}
      buttonText="Login"
      onSuccess={googleResponseSuccessful}
      onFailure={googleResponseFailed}
      hostedDomain={GoogleLoginConst.IOET_DOMAIN}
    />
  );
};

GoogleLoginButton.propTypes = {
  googleResponseSuccessful: PropTypes.func.isRequired,
  googleResponseFailed: PropTypes.func.isRequired,
};

export default GoogleLoginButton;
