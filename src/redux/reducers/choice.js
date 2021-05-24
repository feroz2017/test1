import {SELECT_COUNTRY_CHOICE} from '../actions/types'

const initialSelection = "ch,es,fr,gb";

export default (choice=initialSelection, action)=>{
    switch(action.type){
        case SELECT_COUNTRY_CHOICE:
            return action.payload
        default: 
        return choice
    }
}