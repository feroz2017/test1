import React  from 'react';
import {Radio} from 'antd'
import {useSelector,useDispatch} from 'react-redux'

import {countrySelection,resetUsersStore} from '../../redux/actions'
import Settings from '../components/Settings';

const SettingContainer = () => {

    let choice = useSelector(state=>state.choiceStore)
    
    let dispatch = useDispatch();
    const onChangeHandler = (value)=>{
        dispatch(countrySelection(value))
        dispatch(resetUsersStore());
    }
    return (
        <Settings onChangeHandler={onChangeHandler} choice={choice}/>
        );
}
export default SettingContainer;