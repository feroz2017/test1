import React, { useState } from "react";


const Search = (props) => {
  let [searchTerm, setSearchTerm] = useState("");

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value)
    props.onUpdate(e.target.value)
  };
  
  return (
    <input
      style={{
        marginLeft: "25%",
        marginBottom: "5%",
        width: "50%",
        padding: "0px",
        fontSize: "35px",
      }}
      value={searchTerm}
      onInput={onChangeHandler}
    ></input>
  );
};

export default Search;
