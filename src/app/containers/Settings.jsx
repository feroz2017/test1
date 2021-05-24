import React  from 'react';
import {useSelector,useDispatch} from 'react-redux'

import {countrySelection,resetUsersStore} from '../../redux/actions'
import List from '../components/List';

const COUNTRIRES = ["CH", "ES", "FR", "GB", "ALL"]
const Settings = () => {

    let choice = useSelector(state=>state.choiceStore)
    
    let dispatch = useDispatch();
    const onChangeHandler = (value)=>{
        dispatch(countrySelection(value))
        dispatch(resetUsersStore());
    }
    return (
        <List onChangeHandler={onChangeHandler} choice={choice} list={COUNTRIRES}/>
        );
}
export default Settings;