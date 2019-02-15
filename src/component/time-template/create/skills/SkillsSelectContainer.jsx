import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInputError } from '../../../bpm-text-field/text-field-selector';
import { getTemplateToCreateValue } from '../create-template-selector';
import { getSkillsList } from './skills-selector';
import BpmSelectMultiple from '../../../bpm-select/BpmSelectMultiple';
import { DialogContentFieldNames } from '../create-template-const';

const mapStateToProps = (state, ownProps) => ({
  itemList: getSkillsList(state),
  selectedItems: getTemplateToCreateValue(state, ownProps.selectName),
  error: getInputError(state, ownProps.selectName),
  selectLabel: ownProps.selectLabel,
  selectName: ownProps.selectName,
  allowMultipleSelections: true,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSelectionChange: (selection) => {
    dispatch(ownProps.onSelectionChanged(DialogContentFieldNames.TEMPLATE_SKILLS, selection));
  },
});

const SkillsSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BpmSelectMultiple);

SkillsSelectContainer.propTypes = {
  onSelectionChanged: PropTypes.func.isRequired,
  selectLabel: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
};

export default SkillsSelectContainer;
