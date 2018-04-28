import { SET_CHAT_NAME } from './actionTypes';

export const setChatName = query => ({
  type: SET_CHAT_NAME,
  payload: query,
});
