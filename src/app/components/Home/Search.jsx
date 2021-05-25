import React, { useState } from "react";
import {Space, Input} from "antd"
import "../../assets/styles/index.css"


// className="searchElement"
const Search = (props) => {
  let [searchTerm, setSearchTerm] = useState("");

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value)
    props.onUpdate(e.target.value)
  };
  return (
   <div className="space-align-block">
    <Space align="center" size="large" direction="horizontal">
      <Input
        value={searchTerm}
        onInput={onChangeHandler}
        style={{fontSize:"45px",marginLeft:"45%"}}
      />
   </Space>
   </div>
  );
};

export default Search;