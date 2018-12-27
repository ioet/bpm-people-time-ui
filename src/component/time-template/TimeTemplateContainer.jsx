import { connect } from 'react-redux';
import TimeTemplate from './TimeTemplate';
import { showMessage } from '../message-snackbar/message-actions';

const mapDispatchToProps = dispatch => ({
  startOrStopTemplate: id => dispatch(showMessage(`start or stop template: ${id}`)),
});

const TimeTemplateContainer = connect(
  null,
  mapDispatchToProps,
)(TimeTemplate);

export default TimeTemplateContainer;
