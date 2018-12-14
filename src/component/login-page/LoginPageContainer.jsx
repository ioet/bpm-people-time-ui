import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { isUserLoggedIn } from './login-selector';

const mapStateToProps = state => ({
  isLoggedIn: isUserLoggedIn(state),
});

const LoginPageContainer = connect(
  mapStateToProps,
)(LoginPage);

export default LoginPageContainer;
