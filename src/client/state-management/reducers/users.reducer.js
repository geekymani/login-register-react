import { userConstants } from '../_constants';
const initialState = {loading:true};
export function users(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_ALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GET_ALL_SUCCESS:
      return {
        loading: false,
        items: action.users
      };
    case userConstants.GET_ALL_FAILURE:
      return { 
        loading: false,
        error: action.error
      };
    case userConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        loading: false,
        items: state.items.filter(user => user.id !== action.id)
      };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    default:
      return state
  }
}