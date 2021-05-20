import axios from 'axios';

import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE,SELECT_COUNTRY_CHOICE,UPDATE_SEARCH_RESULT} from './types'
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


// Action Creators for Country Selection
export const countrySelection = (choice)=>{
  return {
    type: SELECT_COUNTRY_CHOICE,
    payload: choice
  }
}


// Async action return function instead of object
export const fetchUsers = (url) => {
  return function (dispatch) {
    dispatch(fetchUserRequest())
    axios
      .get(url)
      .then(({data}) => {
        dispatch(fetchUserSuccess(data.results));
      })
      .catch((err) => {
          dispatch(fetchUserFailure(err.toString()));
      });
  };
};
// export const fetchUsers = (url) => {
//   return function (dispatch) {
//     new Promise((resovle,reject)=>{
//       dispatch(fetchUserRequest())
//     axios
//       .get(url)
//       .then(({data}) => {
//         dispatch(fetchUserSuccess(data.results));
//         resovle();
//       })
//       .catch((err) => {
//           dispatch(fetchUserFailure(err.toString()));
//           reject();
//       });
//     })
//   };
// };
