import produce from 'immer';

import {UPDATE_SEARCH_STORE} from '../actions/types';

const initalSearchStore = {
    searchUsers: [],
    searching: false
};
export default (searchUsersStore = initalSearchStore,action)=>{
  switch(action.type){
    case UPDATE_SEARCH_STORE:
        return produce(searchUsersStore, (drafState) => {
            const {searchUsers,searching} = action.payload;
            drafState.searchUsers = searchUsers;
            drafState.searching = searching;
        })
    default:
        return initalSearchStore;
  }
}