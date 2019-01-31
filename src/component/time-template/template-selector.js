import { isTimeEventActive } from '../time-event/time-event-selector';

export const getTimeTemplatesForUser = state => state.templateList;

export const isTimeTemplateActive = (state, templateId) => (
  state.timeEvent.template_id === templateId && isTimeEventActive(state)
);

export const getTimeTemplateNameById = (state,templateId) => (
  state.templateList[templateId].name
);

