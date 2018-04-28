import { SET_CHAT_INFO, CLEAR_CHAT_INFO } from './actionTypes';
import api from '../../api';

export const fetchChat = roomId => async (dispatch, getState) => {
  const room = await api.getRoom(roomId);
  if (room) {
    dispatch({type:SET_CHAT_INFO, payload: {title: room.name, subtitle: `${room.users.length} members`}});
  }
};

export const clearChat = () => dispatch => {
  dispatch({ type: CLEAR_CHAT_INFO });
};
