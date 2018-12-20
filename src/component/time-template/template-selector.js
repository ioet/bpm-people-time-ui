import { isTimeEventActive } from '../time-event/time-event-selector';

export const getTimeTemplatesForUser = state => state.templateList;

export const isTimeTemplateActive = (state, templateId) => (
  state.timeEvent.template_id === templateId && isTimeEventActive(state)
);
