import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  Affix, Result } from "antd";

import Search from "../components/Home/Search";
import Grid from '../components/Home/Grid.jsx'


import { fetchUsers } from "../../redux/actions";

// Helpers functions
import {
  contains,
  displayEndCatalog,
  displaySpinner,
} from "../utils/common";
import {getUrl} from "../../services/userService.js";

// static
import "../../../public/styles/index.css";


const BATCH_SIZE = 50;

// Helper Functions
const getSearchResults = (data, term) =>
data.filter((element) => {
  if (
    contains(element.name.first, term) ||
    contains(element.name.last, term)
  ) {
    return element;
  }
});

// Main Component
const Home = (props) => {

  const dispatch = useDispatch();

  let usersStore = useSelector((state) => state.usersStore);
  let choiceStore = useSelector((state) => state.choiceStore);
  
  let [searchUsers, setSearchUsers] = useState([]);

  let [isSearching, setIsSearching] = useState(false);

  let [page, setPage] = useState(1); // For infinity Scroll Bar


  useEffect(() => {
    dispatch(fetchUsers(getUrl(page,BATCH_SIZE,choiceStore)));
    // useUserService(page,choiceStore)
    setSearchUsers([...usersStore.users]);
  }, [page, choiceStore]);

  const pageHandler = (value)=>{
    setPage((prev)=>prev+1)
  }
  const updateResults = (searchTerm) => {
    if (!searchTerm) {
      setSearchUsers([...usersStore.users]);
      setIsSearching(false);
    } else {
      setIsSearching(true);
      const result = getSearchResults(usersStore.users, searchTerm.trim());
      setSearchUsers([...result]);
    }
  };

  if (usersStore.error) {
    return (
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
      />
    );
  }
  return (
    <React.Fragment>
      <Affix>
        <Search onUpdate={updateResults} />
      </Affix>
        <Grid usersStore={usersStore} searchUsers={searchUsers} isSearching={isSearching} onPageChange={pageHandler}/>
      {displaySpinner(usersStore.loading)}
      {displayEndCatalog(usersStore.users)}
    </React.Fragment>
  );
};

export default Home;
