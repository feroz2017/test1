import React  from 'react';
import {Radio} from 'antd'

const Settings = (props) => {
    let {onChangeHandler,choice} = props;
    return (
   <div>
    <Radio.Group onChange={(e)=>{onChangeHandler(e.target.value)}} value={choice}>
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