import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BpmSelect from '../../../bpm-select/BpmSelect';
import { getInputError } from '../../../bpm-text-field/text-field-selector';
import { getTemplateToCreateValue } from '../create-template-selector';
import { getOrganizationsList } from './organizations-selector';

const mapStateToProps = (state, ownProps) => ({
  itemList: getOrganizationsList(state),
  selectedItem: getTemplateToCreateValue(state, ownProps.selectName),
  error: getInputError(state, ownProps.selectName),
  selectLabel: ownProps.selectLabel,
  selectName: ownProps.selectName,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSelectionChange: (event) => {
    dispatch(ownProps.onSelectionChanged(event.target.name, event.target.value));
  },
});

const OrganizationsSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BpmSelect);

OrganizationsSelectContainer.propTypes = {
  onSelectionChanged: PropTypes.func.isRequired,
  selectLabel: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
};

export default OrganizationsSelectContainer;
