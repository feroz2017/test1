import React, { useState } from "react";

import "../../../../public/styles/index.css"

const Search = (props) => {
  let [searchTerm, setSearchTerm] = useState("");

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value)
    props.onUpdate(e.target.value)
  };
  return (
    <input
      className="searchElement"
      value={searchTerm}
      onInput={onChangeHandler}
    ></input>
  );
};

export default Search;
