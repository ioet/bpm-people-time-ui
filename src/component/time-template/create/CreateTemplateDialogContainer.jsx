import { connect } from 'react-redux';
import { isCreateDialogOpen } from './create-template-selector';
import { closeCreateTemplateDialog } from './create-template-actions';
import CreateTemplateDialog from './CreateTemplateDialog';

const mapStateToProps = state => ({
  open: isCreateDialogOpen(state),
});

const mapDispatchToProps = dispatch => ({
  handleClose: confirmed => dispatch(closeCreateTemplateDialog(confirmed)),
});

const CreateTemplateDialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateTemplateDialog);

export default CreateTemplateDialogContainer;
