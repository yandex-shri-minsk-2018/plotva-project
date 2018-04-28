import { userReducer } from '../userReducer';
import { SET_USER } from '../../actions/actionTypes';

describe('Redux: User Reducer', () => {
  it('should return initial state with given an empty action', () => {
    expect(userReducer(undefined, {})).toEqual({"selectedUsers": [], "users": []});
  });
  it('should handle SET_USER action', () => {
    const user = {
      _id: '123',
      name: 'Test Test',
      email: 'test@redux.com',
      phone: '533-802-3815',
    };
    const userAction = {
      type: SET_USER,
      user,
    };
    expect(userReducer({}, userAction)).toEqual({user:  user});
  });
});
