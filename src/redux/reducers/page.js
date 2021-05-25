import {NEXT_PAGE} from "../actions/types"
const initialPage = 1;
export default (page=initialPage,action)=>{
    switch(action.type)
    {
        case NEXT_PAGE:
            return action.payload + 1;
        default:
            return page;
    }
}