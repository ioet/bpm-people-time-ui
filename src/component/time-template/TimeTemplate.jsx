import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core';
import { PlayArrow, Stop } from '@material-ui/icons';
import TimeTemplateStyles from './template-styles';
import { TemplateConst } from './template-const';
import PageSplit from '../page-split/PageSplit';
import Fab from "@material-ui/core/Fab";

const getSkillsList = (skills) => {
  let skillsString = '';
  for (let i = 0; i < skills.length; i++) {
    if (skillsString.length === 0) {
      skillsString += skills[i].name;
    } else {
      skillsString += `, ${skills[i].name}`;
    }
  }
  return skillsString;
};

const TimeTemplate = (props) => {
  const {
    classes, template, active, handleStartStopClick,
  } = props;
  const {
    id, name,
    organization_name: organizationName,
    project_name: projectName,
    activity,
    skills,
  } = template;

  const buttonIcon = (active) ? <Stop /> : <PlayArrow />;

  return (

    <Card className={classes.timeTemplate}>
      <PageSplit
        left={(
          <div>
            <Typography variant="h4">
              {name}
            </Typography>
            <Typography className={classes.organizationAndProject} variant="body1">
              {`${organizationName} > ${projectName}`}
            </Typography>
            <Typography className={classes.activity} variant="body1">
              {`${TemplateConst.ACTIVITY}: ${activity}`}
            </Typography>
            <Typography className={classes.skills} variant="body1">
              {`${TemplateConst.SKILLS}: ${getSkillsList(skills)}`}
            </Typography>
          </div>
        )}
        leftSize={10}
        right={(
          <Fab
            color="secondary"
            onClick={(e) => {
              e.preventDefault();
              handleStartStopClick(id);
            }}
          >
            {buttonIcon}
          </Fab>
        )}
        rightSize={2}
        rightStyles={classes.buttonWrapperStyle}
      />
    </Card>
  );
};

TimeTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  template: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  handleStartStopClick: PropTypes.func.isRequired,
};

export default withStyles(TimeTemplateStyles)(TimeTemplate);
