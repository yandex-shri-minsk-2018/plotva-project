import { SET_CHAT_NAME } from '../actions/actionTypes';

export function chatNameReducer(state, action) {
  if (!state) {
    return {
      currentChatName: '',
    };
  }

  if (action.type === SET_CHAT_NAME) {
    return {
      ...state,
      currentChatName: action.payload,
    };
  }

  return state;
}
