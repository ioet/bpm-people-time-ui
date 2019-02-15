import React, { Fragment } from 'react';
import { DialogContentFieldLabels, DialogContentFieldNames } from './create-template-const';
import BpmTextFieldContainer from '../../bpm-text-field/BpmTextFieldContainer';
import ActivitySelectContainer from './activities/ActivitySelectContainer';
import { setCreateTemplateData } from './create-template-actions';
import OrganizationsSelectContainer from './organizations/OrganizationsSelectContainer';
import ProjectsSelectContainer from './projects/ProjectsSelectContainer';
import SkillsSelectContainer from './skills/SkillsSelectContainer';

const CreateTemplateDialogContent = () => (
  <Fragment>
    <BpmTextFieldContainer
      name={DialogContentFieldNames.TEMPLATE_NAME}
      label={DialogContentFieldLabels.TEMPLATE_NAME_LABEL}
      autoFocus
    />
    <ActivitySelectContainer
      selectName={DialogContentFieldNames.TEMPLATE_ACTIVITY}
      selectLabel={DialogContentFieldLabels.TEMPLATE_ACTIVITY_LABEL}
      onSelectionChanged={setCreateTemplateData}
    />
    <OrganizationsSelectContainer
      selectName={DialogContentFieldNames.TEMPLATE_ORGANIZATION_ID}
      selectLabel={DialogContentFieldLabels.TEMPLATE_ORGANIZATION_LABEL}
      onSelectionChanged={setCreateTemplateData}
    />
    <ProjectsSelectContainer
      selectName={DialogContentFieldNames.TEMPLATE_PROJECT_ID}
      selectLabel={DialogContentFieldLabels.TEMPLATE_PROJECT_LABEL}
      onSelectionChanged={setCreateTemplateData}
    />
    <SkillsSelectContainer
      selectName={DialogContentFieldNames.TEMPLATE_SKILLS}
      selectLabel={DialogContentFieldLabels.TEMPLATE_SKILLS_LABEL}
      onSelectionChanged={setCreateTemplateData}
    />
  </Fragment>
);

export default CreateTemplateDialogContent;
