import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import TemplateListConst from './template-list-const';
import TemplateListStyles from './template-list-styles';
import TimeTemplateContainer from '../time-template/TimeTemplateContainer';

const createTimeTemplate = template => <TimeTemplateContainer key={template.id} template={template} />;

const createTimeTemplateList = (templateList) => {
  const timeTemplates = [];
  Object.keys(templateList).forEach((key) => {
    timeTemplates.push(createTimeTemplate(templateList[key]));
  });
  return timeTemplates;
};

const TemplateList = (props) => {
  const { classes, templateList, createNewTemplate } = props;

  return (
    <Fragment>
      <Typography
        className={classes.createTimeTemplate}
        variant="body1"
        onClick={(e) => {
          e.preventDefault();
          createNewTemplate();
        }}
      >
        {TemplateListConst.CREATE_NEW_TIME_TEMPLATE}
      </Typography>
      <List className={classes.list}>
        {
          createTimeTemplateList(templateList)
        }
      </List>
    </Fragment>
  );
};

TemplateList.defaultProps = {
  templateList: {},
};

TemplateList.propTypes = {
  classes: PropTypes.object.isRequired,
  templateList: PropTypes.object,
  createNewTemplate: PropTypes.func.isRequired,
};

export default withStyles(TemplateListStyles)(TemplateList);
