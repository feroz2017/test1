import {FETCH_USERS_REQUEST, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from '../actions/types'
const initialUserStore = {
  loading: false,
  users: [],
  error: null
}
export default (usersStore = initialUserStore, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...usersStore,
          loading: true,
        };
      case FETCH_USERS_SUCCESS:
        return {
          ...usersStore,
          loading: false,
          users: action.payload,
        };
      case FETCH_USERS_FAILURE:
        return {
          ...usersStore,
          loading:false,
          error: action.payload,
        };
      default:
        return usersStore;
    }
};