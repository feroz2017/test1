import produce from "immer";

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  RESET_URSERS
} from "../actions/types";
const initialUserStore = {
  loading: false,
  users: [],
  error: null,
};
export default (usersStore = initialUserStore, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      // return {
      //   ...usersStore,
      //   loading: true,
      // };
      return produce(usersStore, (draftState) => {
        draftState.loading = true;
      });
    case FETCH_USERS_SUCCESS:
      // console.log(usersStore.users)
      // console.log(action.payload)
      // return {
      //   ...usersStore,
      //   loading: false,
      //   users: [...usersStore.users, ...action.payload],
      // };
      return produce(usersStore, (draftState) => {
        draftState.loading = false;
        Array.prototype.push.apply(draftState.users, action.payload);
      });
    case FETCH_USERS_FAILURE:
      // return {
      //   ...usersStore,
      //   loading:false,
      //   error: action.payload,
      // };
      return produce(usersStore, (draftState) => {
        draftState.loading = false,
        draftState.error = action.payload;
      });
    case RESET_URSERS:
        return initialUserStore;
    default:
      return usersStore;
  }
};
