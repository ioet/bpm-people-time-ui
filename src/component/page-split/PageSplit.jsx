import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import PageSplitStyles from './page-split-styles';

const PageSplit = (props) => {
  const {
    classes, left, leftSize, leftStyles, right, rightSize, rightStyles,
  } = props;

  return (
    <Grid
      container
      spacing={24}
      className={classes.root}
    >
      <Grid className={leftStyles} item xs={leftSize}>
        {left}
      </Grid>
      <Grid className={rightStyles} item xs={rightSize}>
        {right}
      </Grid>
    </Grid>
  );
};

PageSplit.defaultProps = {
  leftStyles: '',
  rightStyles: '',
};

PageSplit.propTypes = {
  classes: PropTypes.object.isRequired,
  left: PropTypes.element.isRequired,
  leftSize: PropTypes.number.isRequired,
  leftStyles: PropTypes.string,
  right: PropTypes.element.isRequired,
  rightSize: PropTypes.number.isRequired,
  rightStyles: PropTypes.string,
};

export default withStyles(PageSplitStyles)(PageSplit);
