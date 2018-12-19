import React, { Fragment } from 'react';
import { DialogContentConst } from './create-template-const';
import BpmTextFieldContainer from '../../bpm-text-field/BpmTextFieldContainer';

const CreateTemplateDialogContent = () => (
  <Fragment>
    <BpmTextFieldContainer
      name={DialogContentConst.TEMPLATE_NAME}
      label={DialogContentConst.TEMPLATE_NAME_LABEL}
      autoFocus
    />
    <BpmTextFieldContainer
      name={DialogContentConst.TEMPLATE_ACTIVITY}
      label={DialogContentConst.TEMPLATE_ACTIVITY_LABEL}
    />
  </Fragment>
);

export default CreateTemplateDialogContent;
