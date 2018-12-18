import { connect } from 'react-redux';
import MessageSnackbar from './MessageSnackbar';
import { hideMessage } from './message-actions';

const mapStateToProps = state => ({
  open: state.message.open,
  message: state.message.message,
});

const mapDispatchToProps = dispatch => ({
  handleClose: () => {
    dispatch(hideMessage());
  },
});

const MessageSnackbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageSnackbar);

export default MessageSnackbarContainer;
