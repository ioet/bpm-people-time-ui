import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { CreateDialogConst } from './create-template-const';
import CreateTemplateDialogContent from './CreateTemplateDialogContent';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const CreateTemplateDialog = (props) => {
  const { open, handleClose } = props;

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      fullScreen
      onClose={(e) => {
        e.preventDefault();
        handleClose(false);
      }}
    >
      <DialogTitle>
        {CreateDialogConst.TITLE}
      </DialogTitle>
      <DialogContent>
        <CreateTemplateDialogContent />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleClose(false);
          }}
          color="primary"
        >
          {CreateDialogConst.CANCEL}
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleClose(true);
          }}
          color="primary"
        >
          {CreateDialogConst.OK}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CreateTemplateDialog.defaultProps = {
  templateList: {},
};

CreateTemplateDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default CreateTemplateDialog;
