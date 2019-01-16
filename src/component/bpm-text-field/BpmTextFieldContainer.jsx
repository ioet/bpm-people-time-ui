import { connect } from 'react-redux';
import BpmTextField from './BpmTextField';
import { setTextFieldData } from './text-field-actions';
import { getInputError } from './text-field-selector';
import { getTemplateToCreateValue } from '../time-template/create/create-template-selector';

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.name,
  label: ownProps.label,
  value: getTemplateToCreateValue(state, ownProps.name),
  error: getInputError(state, ownProps.name),
  helperText: ownProps.helperText,
  type: ownProps.type,
});

const mapDispatchToProps = dispatch => ({
  onChange: (event) => {
    dispatch(setTextFieldData(event.target.name, event.target.value));
  },
});

const BpmTextFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BpmTextField);

export default BpmTextFieldContainer;
