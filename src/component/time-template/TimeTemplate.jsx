import React from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/es/Typography/Typography';

const TimeTemplate = (props) => {
  const {
    title,
    project,
    activity,
    skills,
  } = props;

  return (
    <Card>
      <Typography variant="h2">
        {title}
      </Typography>
      <Typography variant="body1">
        {project}
      </Typography>
      <Typography variant="body1">
        {activity}
      </Typography>
      <Typography variant="body1">
        {skills}
      </Typography>
    </Card>
  );
};

TimeTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TimeTemplate;
