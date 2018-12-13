import { connect } from 'react-redux';
import TimeTemplate from './TimeTemplate';

const mapStateToProps = (state) => {
  if (typeof state.templateList['db46850d-189f-476f-8e68-242d125ddaf6'] === 'undefined') {
    return {
      title: 'nothing there yet',
      project: 'ab',
      activity: 'abc',
      skills: ['ay', 'ax'],
    };
  }
  return {
    title: state.templateList['db46850d-189f-476f-8e68-242d125ddaf6'].name,
    project: 'ab',
    activity: 'abc',
    skills: ['ay', 'ax'],
  };
};

const TimeTemplateContainer = connect(
  mapStateToProps,
)(TimeTemplate);

export default TimeTemplateContainer;
