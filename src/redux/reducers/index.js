import {combineReducers} from 'redux'

import userReducer from './user'
import choiceReducer from './choice'
import searchReducer from './search'
import pageReducer from './page'


export default combineReducers({
    usersStore: userReducer,
    choiceStore: choiceReducer,
    searchUsersStore: searchReducer,
    pageStore: pageReducer
})