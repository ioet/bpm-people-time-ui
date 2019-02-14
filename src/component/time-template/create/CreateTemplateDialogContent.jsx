import React, { Fragment } from 'react';
import { DialogContentConst } from './create-template-const';
import BpmTextFieldContainer from '../../bpm-text-field/BpmTextFieldContainer';
import ActivitySelectContainer from './activities/ActivitySelectContainer';
import { setCreateTemplateData } from './create-template-actions';
import OrganizationsSelectContainer from './organizations/OrganizationsSelectContainer';
import ProjectsSelectContainer from './projects/ProjectsSelectContainer';
import SkillsSelectContainer from './skills/SkillsSelectContainer';

const CreateTemplateDialogContent = () => (
  <Fragment>
    <BpmTextFieldContainer
      name={DialogContentConst.TEMPLATE_NAME}
      label={DialogContentConst.TEMPLATE_NAME_LABEL}
      autoFocus
    />
    <ActivitySelectContainer
      selectName={DialogContentConst.TEMPLATE_ACTIVITY}
      selectLabel={DialogContentConst.TEMPLATE_ACTIVITY_LABEL}
      onSelectionChanged={setCreateTemplateData}
    />
    <OrganizationsSelectContainer
      selectName={DialogContentConst.TEMPLATE_ORGANIZATION}
      selectLabel={DialogContentConst.TEMPLATE_ORGANIZATION_LABEL}
      onSelectionChanged={setCreateTemplateData}
    />
    <ProjectsSelectContainer
      selectName={DialogContentConst.TEMPLATE_PROJECT}
      selectLabel={DialogContentConst.TEMPLATE_PROJECT_LABEL}
      onSelectionChanged={setCreateTemplateData}
    />
    <SkillsSelectContainer
      selectName={DialogContentConst.TEMPLATE_SKILLS}
      selectLabel={DialogContentConst.TEMPLATE_SKILLS_LABEL}
      onSelectionChanged={setCreateTemplateData}
    />
  </Fragment>
);

export default CreateTemplateDialogContent;
