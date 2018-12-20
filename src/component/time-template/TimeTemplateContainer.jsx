import { connect } from 'react-redux';
import TimeTemplate from './TimeTemplate';
import { startOrStopEvent } from '../time-event/time-event-actions';
import { isTimeTemplateActive } from './template-selector';

const mapStateToProps = (state, ownProps) => ({
  active: isTimeTemplateActive(state, ownProps.template.id),
});

const mapDispatchToProps = dispatch => ({
  handleStartStopClick: id => dispatch(startOrStopEvent(id)),
});

const TimeTemplateContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimeTemplate);

export default TimeTemplateContainer;
