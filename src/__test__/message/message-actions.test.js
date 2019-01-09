import expect from 'expect';
import MessageAction from '../../component/message-snackbar/message-action-types';
import { hideMessage, showMessage } from '../../component/message-snackbar/message-actions';

describe('Tests message actions', () => {
  it('Creates an action to show a message', () => {
    const message = 'some message';
    const expectedAction = {
      type: MessageAction.SHOW_MESSAGE,
      message,
    };

    expect(showMessage(message)).toEqual(expectedAction);
  });

  it('Creates an action to hide a message', () => {
    const expectedAction = {
      type: MessageAction.HIDE_MESSAGE,
    };

    expect(hideMessage()).toEqual(expectedAction);
  });
});
