import { connect } from 'react-redux';
import { performLogout } from '../login-page/login-actions';
import BpmAppBar from './BpmAppBar';
import { isUserLoggedIn } from '../login-page/login-selector';

const mapStateToProps = state => ({
  isLoggedIn: isUserLoggedIn(state),
});

const mapDispatchToProps = dispatch => ({
  performLogout: () => {
    dispatch(performLogout());
  },
});

const BpmAppBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BpmAppBar);

export default BpmAppBarContainer;
