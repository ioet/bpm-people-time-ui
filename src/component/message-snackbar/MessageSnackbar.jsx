import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar/Snackbar';
import PropTypes from 'prop-types';
import SnackbarStyles from './message-snackbar-styles';
import MessageSnackbarConst from './message-const';

const MessageSnackbar = (props) => {
  const {
    classes, open, handleClose, message,
  } = props;

  return (
    <Snackbar
      className={classes.snackbar}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={MessageSnackbarConst.AUTO_HIDE_DURATION}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'messageReducer-id',
      }}
      message={(
        <span id="message-id">
          {message}
        </span>
      )}
    />
  );
};

MessageSnackbar.defaultProps = {
  message: '',
};

MessageSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  message: PropTypes.string,
};

export default withStyles(SnackbarStyles)(MessageSnackbar);
