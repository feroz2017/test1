import {SELECT_COUNTRY_CHOICE} from '../actions/types'

const initialSelection = "all";

export default (choice=initialSelection, action)=>{
    switch(action.type){
        case SELECT_COUNTRY_CHOICE:
            return action.payload
        default: 
        return choice
    }
}