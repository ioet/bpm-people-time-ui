import expect from 'expect';
import MessageAction from '../component/message-snackbar/message-action-types';
import { message } from '../component/message-snackbar/message-reducer';

const INITIAL_STATE = '@@init';

const initialStateAction = {
  type: INITIAL_STATE,
};

describe('message reducer', () => {
  it('returns the initial state', () => {
    expect(message(undefined, initialStateAction))
      .toEqual({
        open: false,
      });
  });

  it('handles show message', () => {
    const someMsg = 'message';
    const showMessageAction = {
      type: MessageAction.SHOW_MESSAGE,
      message: someMsg,
    };
    expect(message({}, showMessageAction)).toEqual({
      open: true,
      message: someMsg,
    });
  });

  it('handles hide message', () => {
    const hideMessageAction = {
      type: MessageAction.HIDE_MESSAGE,
    };
    expect(message({}, hideMessageAction)).toEqual({
      open: false,
    });
  });
});
