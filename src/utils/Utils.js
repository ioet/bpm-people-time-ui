export const arrayToTemplateObject = (array, keyField) => (
  array.reduce((obj, template) => {
    obj[template[keyField]] = template;
    return obj;
  }, {})
);
