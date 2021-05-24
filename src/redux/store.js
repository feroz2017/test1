import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'

import thunk from 'redux-thunk'


// const customMiddleWare = state => next => action => {
//     if(typeof action === 'function'){
//         return action(state.dispatch,state.getState)
//     }
//     return next(action)
// }


export default createStore(rootReducer , applyMiddleware(thunk))