import axios from "axios";

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SELECT_COUNTRY_CHOICE,
  RESET_URSERS,
  UPDATE_SEARCH_STORE,
  NEXT_PAGE
} from "./types";

import { getSearchResults } from "../../app/utils/helpers";

// Action Creators for Users
export const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
export const fetchUserFailure = (err) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: err,
  };
};
export const resetUsersStore = () => {
  return {
    type: RESET_URSERS,
  };
};

// Action Creators for Country Selection
export const countrySelection = (choice) => {
  return {
    type: SELECT_COUNTRY_CHOICE,
    payload: choice,
  };
};

// Action Creators for Search Users
export const searchQuery = (searchTerm, users) => {
  let action = {
    type: UPDATE_SEARCH_STORE,
    payload: {
      searchUsers: [],
      searching: false,
    },
  };
  if (!searchTerm) {
    action.payload.searchUsers = users;
  } else {
    action.payload.searchUsers = getSearchResults(users, searchTerm.trim());
    action.payload.searching = true;
  }
  console.log(action)
  return action;
};

// Action Creator for Page Handling
export const nextPage = (currentPage)=>{
      return {
        type: NEXT_PAGE,
        payload: currentPage
      }
}


export const updateSearchUsers = (searchUsers, searching) => {
  return {
    type: UPDATE_SEARCH_STORE,
    payload: {
      searchUsers,
      searching,
    },
  };
};

// Async action return function instead of object
export const fetchUsers = (url) => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get(url)
      .then(({ data }) => {
        dispatch(fetchUserSuccess(data.results));
      })
      .catch((err) => {
        dispatch(fetchUserFailure(err.toString()));
      });
  };
};
