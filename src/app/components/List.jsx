import React  from 'react';
import {Radio} from 'antd'

const CountryList = (props) => {
    let {onChangeHandler,choice,list} = props;
    const renderList = (list) => list.map((item,index) => <Radio key={index} value={item.toLowerCase()}>{item}</Radio>)
return (
   <div>
    <Radio.Group onChange={(e)=>{onChangeHandler(e.target.value)}} value={choice}>
        {renderList(list)}
    </Radio.Group>
   </div>
  );
}
export default CountryList;