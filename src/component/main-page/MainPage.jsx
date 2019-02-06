import React from 'react';
import TemplateListContainer from '../template-list/TemplateListContainer';
import PageSplit from '../page-split/PageSplit';
import TimeActiveContainer from '../time-active/TimeActiveContainer';

const MainPage = () => (
  <PageSplit
    left={<TimeActiveContainer />}
    leftSize={4}
    right={<TemplateListContainer />}
    rightSize={8}
  />
);

export default MainPage;
