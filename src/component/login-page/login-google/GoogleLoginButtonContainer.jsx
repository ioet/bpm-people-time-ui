import { connect } from 'react-redux';
import GoogleLoginButton from './GoogleLoginButton';
import { getUserIdByEmail, loginFailed, performLogin } from '../login-actions';
import GoogleLoginConst from './google-login-const';
import { showMessage } from '../../message-snackbar/message-actions';
import { LoginErrorMessage } from '../login-const';

const mapDispatchToProps = dispatch => ({
  googleResponseSuccessful: (response) => {
    const loginToken = response.tokenObj.id_token;
    const userEmail = response.profileObj.email;
    if (response.profileObj.email.endsWith(GoogleLoginConst.IOET_DOMAIN)) {
      dispatch(getUserIdByEmail(loginToken, userEmail));
    } else {
      dispatch(showMessage(LoginErrorMessage.GOOGLE_ACCOUNT_NOT_PERMITTED));
    }
  },
  googleResponseFailed: (response) => {
    loginFailed(response);
  },
});

const GoogleLoginButtonContainer = connect(
  null,
  mapDispatchToProps,
)(GoogleLoginButton);

export default GoogleLoginButtonContainer;
