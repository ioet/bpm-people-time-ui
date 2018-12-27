import MessageAction from './message-action-types';

export const messageReducer = (state = { open: false }, action) => {
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

export default messageReducer;
