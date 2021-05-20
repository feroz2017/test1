import {combineReducers} from 'redux'

import userReducer from './user'
import choiceReducer from './choice'
import searchReducer from './search'

export default combineReducers({
    usersStore: userReducer,
    choiceStore: choiceReducer,
    searchedResult: searchReducer
})