import { SET_USER, SET_USERS, SET_NEXT, SET_SELECTED } from './actionTypes';

export const setUser = user => ({
  type: SET_USER,
  user,
});

export const setUsers = users => ({
  type: SET_USERS,
  users,
});

export const setNext = next => ({
  type: SET_NEXT,
  next,
});

export const setSelectedUsers = users => ({
  type: SET_SELECTED,
  users,
});
