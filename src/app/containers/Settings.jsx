import React  from 'react';
import {useSelector,useDispatch} from 'react-redux'

import {countrySelection,resetUsersStore} from '../../redux/actions'
import CountryList from '../components/Settings/CountryList.jsx';


const Settings = () => {

    let choice = useSelector(state=>state.choiceStore)
    
    let dispatch = useDispatch();
    const onChangeHandler = (value)=>{
        dispatch(countrySelection(value))
        dispatch(resetUsersStore());
    }
    return (
        <CountryList onChangeHandler={onChangeHandler} choice={choice}/>
        );
}
export default Settings;