import MessageAction from './message-action-types';

export const showMessage = message => ({
  type: MessageAction.SHOW_MESSAGE,
  message,
});
export const hideMessage = () => ({
  type: MessageAction.HIDE_MESSAGE,
});
