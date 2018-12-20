import expect from 'expect';
import MessageAction from '../../component/message-snackbar/message-action-types';
import { messageReducer } from '../../component/message-snackbar/message-reducer';

const INITIAL_STATE = '@@INIT';

const initialStateAction = {
  type: INITIAL_STATE,
};

describe('messageReducer reducer', () => {
  it('returns the initial state', () => {
    expect(messageReducer(undefined, initialStateAction))
      .toEqual({
        open: false,
      });
  });

  it('handles show messageReducer', () => {
    const someMsg = 'message';
    const showMessageAction = {
      type: MessageAction.SHOW_MESSAGE,
      message: someMsg,
    };
    expect(messageReducer({}, showMessageAction)).toEqual({
      open: true,
      message: someMsg,
    });
  });

  it('handles hide messageReducer', () => {
    const hideMessageAction = {
      type: MessageAction.HIDE_MESSAGE,
    };
    expect(messageReducer({}, hideMessageAction)).toEqual({
      open: false,
    });
  });
});
