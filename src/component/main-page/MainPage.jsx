import React from 'react';
import Paper from '@material-ui/core/Paper';
import TemplateListContainer from '../template-list/TemplateListContainer';
import PageSplit from '../page-split/PageSplit';

const MainPage = () => (
  <PageSplit
    left={<Paper>Left bar</Paper>}
    leftSize={4}
    right={<TemplateListContainer />}
    rightSize={8}
  />
);

export default MainPage;
