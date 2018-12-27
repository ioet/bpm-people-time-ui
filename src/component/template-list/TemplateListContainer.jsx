import { connect } from 'react-redux';
import TemplateList from './TemplateList';
import { getTimeTemplatesForUser } from '../time-template/template-selector';
import { showCreateDialog } from '../time-template/create/create-template-actions';

const mapStateToProps = state => ({
  templateList: getTimeTemplatesForUser(state),
});

const mapDispatchToProps = dispatch => ({
  createNewTemplate: () => dispatch(showCreateDialog()),
});

const TemplateListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TemplateList);

export default TemplateListContainer;
