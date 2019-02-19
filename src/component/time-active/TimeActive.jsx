import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/es/styles/withStyles';
import TextField from '@material-ui/core/es/TextField/TextField';
import { PlayArrow, Stop } from '@material-ui/icons';
import Fab from '@material-ui/core/Fab';
import { TemplateConst } from '../time-template/template-const';
import PageSplit from '../page-split/PageSplit';
import ActiveTimeStyles from './time-active-styles';
import TemplateListConst from '../template-list/template-list-const';
import TimeActiveConst from './time-active-const';

class TimeActive extends React.Component {
  addLeadingZero(number) {
    return (number < 10) ? `0${number}` : number;
  }

  getSkillsList(skills = []) {
    let skillsString = '';
    if (skills == null) return skillsString;
    for (let i = 0; i < skills.length; i++) {
      if (skillsString.length === 0) {
        skillsString += skills[i].name;
      } else {
        skillsString += `, ${skills[i].name}`;
      }
    }
    return skillsString;
  }

  formatDuration(duration) {
    const second = this.addLeadingZero(Math.floor((duration / 1000) % 60));
    const minute = this.addLeadingZero(Math.floor((duration / (1000 * 60)) % 60));
    const hour = this.addLeadingZero(Math.floor((duration / (1000 * 60 * 60))));

    return `${hour}:${minute}:${second}`;
  }

  updateTime() {
    const duration = this.props.activeTimeEvent.duration;
    if (typeof duration !== 'undefined') {
      this.props.updateActiveTimeEventDuration(duration + 1000);
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.props.activeTimeEvent.id !== nextProps.activeTimeEvent.id) {
      clearInterval(this.interval);
      if (nextProps.activeTimeEvent.stop_time == null) {
        this.interval = setInterval(() => this.updateTime(), 1000);
      }
    } else if (nextProps.activeTimeEvent.stop_time != null) {
      clearInterval(this.interval);
    }
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { classes, handleStartStopClick } = this.props;
    const currentDay = new Date().getDate();
    const currentMonth = (new Date().getMonth()) + 1;

    const {
      skills,
      templateName,
      organization_name: organizationName,
      project_name: projectName,
      activityName,
      template_id: templateId,
      stop_time: stopTime,
    } = this.props.activeTimeEvent;

    const buttonIcon = (stopTime == null) ? <Stop /> : <PlayArrow />;
    return (
      <div>
        <Fragment>
          <Typography
            className={classes.currentlyActiveTimeEvent}
            variant="h5"
          >
            {TemplateListConst.CURRENTLY_ACTIVE_TIME_EVENT}
          </Typography>
        </Fragment>
        <Card className={classes.timeActiveTemplate}>
          <PageSplit
            left={(
              <div>
                <Typography variant="subtitle1">
                  {'Day'}
                </Typography>
                <Typography variant="h4">
                  {currentDay}
                </Typography>
              </div>
            )}
            leftSize={6}
            right={(
              <div>
                <Typography variant="subtitle1">
                  {'Month'}
                </Typography>
                <Typography variant="h4">
                  {currentMonth}
                </Typography>
              </div>
            )}
            rightSize={6}
          />
        </Card>

        <Card className={classes.timeActiveTemplate}>
          <PageSplit
            left={(
              <div>
                <Typography variant="h4">
                  {templateName}
                </Typography>
                <Typography className={classes.organizationAndProject} variant="h5">
                  {`${organizationName} > ${projectName}`}
                </Typography>
                <Typography className={classes.activity} variant="body1">
                  {`${TemplateConst.ACTIVITY}: ${activityName}`}
                </Typography>
                <Typography variant="h3">
                  {this.formatDuration(this.props.activeTimeEvent.duration)}
                </Typography>
                <Typography className={classes.skills} variant="body1">
                  {`${TemplateConst.SKILLS}: ${this.getSkillsList(skills)}`}
                </Typography>
                <TextField
                  label={TimeActiveConst.WHAT_DID_YOU_DO}
                  placeholder={TimeActiveConst.IMPLEMENTED_SOME_CHANGES}
                />
              </div>
            )}
            leftSize={8}

            right={(
              <Fab
                color="secondary"
                onClick={(e) => {
                  e.preventDefault();
                  handleStartStopClick(templateId);
                }}
              >
                {buttonIcon}
              </Fab>
            )}
            rightSize={4}
          />
        </Card>
      </div>
    );
  }
}

TimeActive.propTypes = {
  classes: PropTypes.object.isRequired,
  activeTimeEvent: PropTypes.object.isRequired,
  updateActiveTimeEventDuration: PropTypes.func.isRequired,
  handleStartStopClick: PropTypes.func.isRequired,
};
export default withStyles(ActiveTimeStyles)(TimeActive);
