import {createStore, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import rootReducer from './reducers'
// const customMiddleWare = state => next => action => {
//     if(typeof action === 'function'){
//         return action(state.dispatch,state.getState)
//     }
//     return next(action)
// }

// const searchMiddleWare = state => next => action => {
//     if(action.type === SEARCH_QUERY){
//         let store = state.getState();
//         const result = getSearchResults(store.usersStore.users, action.payload.searchTerm.trim());
//         return action.payload.searchTerm!='' ? next(updateSearchUsers(result,true)) : next(updateSearchUsers(store.usersStore.users,false))
//     }
//     return next(action)
// }

export default createStore(rootReducer , applyMiddleware(thunk))
