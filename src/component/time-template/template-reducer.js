import TemplateAction from './template-action-types';

export const arrayToObject = (array, keyField) => (
  array.reduce((obj, template) => {
    obj[template[keyField]] = template;
    return obj;
  }, {})
);

export const templateListReducer = (state = {}, action) => {
  const copy = Object.assign({}, state);
  switch (action.type) {
    case TemplateAction.ADD_TEMPLATES:
      return {
        ...state,
        ...arrayToObject(action.templates, 'id'),
      };
    case TemplateAction.UPDATE_TEMPLATE:
      copy[action.template.id] = action.template;
      return { ...copy };
    case TemplateAction.REMOVE_TEMPLATE:
      delete copy[action.templateId];
      return { ...copy };
    default:
      return state;
  }
};

export default templateListReducer;
