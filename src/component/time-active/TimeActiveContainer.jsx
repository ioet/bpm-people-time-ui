import { connect } from 'react-redux';
import TimeActive from './TimeActive';
import { getTimeEvent } from '../time-event/time-event-selector';
import { setActiveTimeEventDuration, startOrStopEvent } from '../time-event/time-event-actions';

const mapStateToProps = state => ({
  activeTimeEvent: getTimeEvent(state),
});

const mapDispatchToProps = dispatch => ({
  updateActiveTimeEventDuration: duration => dispatch(setActiveTimeEventDuration(duration)),
  handleStartStopClick: id => dispatch(startOrStopEvent(id)),
});

const TimeActiveContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimeActive);
export default TimeActiveContainer;
