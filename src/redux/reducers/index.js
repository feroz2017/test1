import {combineReducers} from 'redux'

import userReducer from './user'
import choiceReducer from './choice'


export default combineReducers({
    usersStore: userReducer,
    choiceStore: choiceReducer
})