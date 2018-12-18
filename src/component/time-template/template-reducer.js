import TemplateAction from './template-action-types';

export const arrayToTemplateObject = (array, keyField) => (
  array.reduce((obj, template) => {
    obj[template[keyField]] = template;
    return obj;
  }, {})
);

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

export default templateList;
