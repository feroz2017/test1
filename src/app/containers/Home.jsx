import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  Affix, Result } from "antd";

import Search from "../components/Home/Search";
import UserGrid from '../components/Home/UserGrid.jsx'
import Spinner from "../components/Common/Spinner"
import EndCatalog from "../components/Common/EndCatalog";


import { fetchUsers , searchQuery,nextPage} from "../../redux/actions";

// Helpers functions
import {
  hasMore,
} from "../utils/helpers";
import {getUrl} from "../../services/userService.js";

// static
import "../assets/styles/index.css"

// Main Component
const Home = () => {

  const dispatch = useDispatch();

  let usersStore = useSelector(state => state.usersStore);
  let choiceStore = useSelector(state => state.choiceStore);
  let searchUsersStore = useSelector(state => state.searchUsersStore);
  let pageStore = useSelector(state => state.pageStore);
  


  useEffect(() => {
    dispatch(fetchUsers(getUrl(pageStore,choiceStore)));
  }, [pageStore, choiceStore]);

  const pageHandler = ()=>{
    dispatch(nextPage(pageStore))
  }
  const updateResults = (searchTerm) => {
    dispatch(searchQuery(searchTerm,usersStore.users));
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
        <UserGrid usersStore={usersStore} searchUsers={searchUsersStore.searchUsers} isSearching={searchUsersStore.searching} onPageChange={pageHandler}/>
        <Spinner status={usersStore.loading}/>
        <EndCatalog visibility={!hasMore(usersStore.users)}/>
    </React.Fragment>
  );
};

export default Home;
