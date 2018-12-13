import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { isUserLoggedIn } from '../login-page/login-selector';

const mapStateToProps = state => ({
  isLoggedIn: isUserLoggedIn(state),
});

const PrivateRouteContainer = connect(
  mapStateToProps,
)(PrivateRoute);

export default PrivateRouteContainer;
