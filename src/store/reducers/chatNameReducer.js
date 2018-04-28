import { SET_CHAT_NAME } from '../actions/actionTypes';

export function searchReducer(state, action) {
  if (!state) {
    return {
      currentUserSearch: '',
    };
  }

  if (action.type === SET_CHAT_NAME) {
    return {
      ...state,
      currentChatName: action.query,
    };
  }

  return state;
}
