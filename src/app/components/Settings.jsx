import React  from 'react';
import {Radio} from 'antd'
import {useSelector,useDispatch} from 'react-redux'




import {countrySelection,resetUsersStore} from '../../redux/actions'

const Settings = () => {

    let choice = useSelector(state=>state.choiceStore)
    
    let dispatch = useDispatch();
    const onChange = (e)=>{
        dispatch(countrySelection(e.target.value))
        dispatch(resetUsersStore());
    }
    return (
   <div style={{margin: "100px"}}>
    <Radio.Group onChange={onChange} value={choice}>
        <Radio key={1} value={"ch,es,fr,gb"}>ALL</Radio>
        <Radio key={2} value={"ch"}>CH</Radio>
        <Radio key={3} value={"es"}>ES</Radio>
        <Radio key={4} value={"fr"}>FR</Radio>
        <Radio key={5} value={"gb"}>GB</Radio>
    </Radio.Group>
   </div>
  );
}
export default Settings;