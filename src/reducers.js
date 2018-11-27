/* eslint-disable no-plusplus */
import { combineReducers } from 'redux';
import { MessageAction, TemplateAction } from './action-types';
import { arrayToTemplateObject } from './utils/Utils';

export const message = (state = { open: false }, action) => {
  switch (action.type) {
    case MessageAction.SHOW_MESSAGE:
      return {
        open: true,
        message: action.message,
      };
    case MessageAction.HIDE_MESSAGE:
      return {
        open: false,
      };
    default:
      return state;
  }
};

export const template = (state = {}, action) => {
  switch (action.type) {
    case TemplateAction.ADD_TEMPLATE:
      return {
        [action.template.id]: action.template,
      };
    case TemplateAction.ADD_TEMPLATES:
      return arrayToTemplateObject(action.template, 'id');
    default:
      return state;
  }
};
export const templateList = (state = {}, action) => {
  const copy = Object.assign({}, state);
  switch (action.type) {
    case TemplateAction.ADD_TEMPLATE:
      return {
        ...state,
        ...template(undefined, action),
      };
    case TemplateAction.ADD_TEMPLATES:
      return {
        ...state,
        ...template(undefined, action),
      };
    case TemplateAction.UPDATE:
      copy[action.template.id] = action.template;
      return { ...copy };
    case TemplateAction.REMOVE:
      delete copy[action.templateId];
      return { ...copy };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  message,
  templateList,
});

export default rootReducer;
