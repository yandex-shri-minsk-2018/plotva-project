import { SET_CHAT_NAME } from './actionTypes';

export const setChatName = payload => ({
  type: SET_CHAT_NAME,
  query: payload,
});
