import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Affix, Result } from "antd";

import Search from "./Search";
import UserModel from "./UserModel";
import { fetchUsers } from "../../redux/actions";
// Helpers functions
import { renderUsers, getSearchResults } from "../utils/homeHelper.js";
import {
  hasMore,
  isEmpty,
  displayEndCatalog,
  displaySpinner,
} from "../utils/common";
import {getUrl} from "../services/userService.js";

// static
import "../../../public/styles/index.css";



const BATCH_SIZE = 50;

// Main Component
const Home = () => {
  const dispatch = useDispatch();

  let usersStore = useSelector((state) => state.usersStore);
  let choiceStore = useSelector((state) => state.choiceStore);
  let [searchUsers, setSearchUsers] = useState([]);
  let [modelUser, setModelUser] = useState(0);
  let [isModelVisible, setModelVisible] = useState(false);
  let [isSearching, setIsSearching] = useState(false);

  let [page, setPage] = useState(1); // For infinity Scroll Bar
  let observer = useRef();

  useEffect(() => {
    dispatch(fetchUsers(getUrl(page,BATCH_SIZE,choiceStore)));
    // useUserService(page,choiceStore)
    setSearchUsers([...usersStore.users]);
  }, [page, choiceStore]);

  const makeUserVisible = (index) => {
    setModelVisible(true);
    setModelUser(index);
  };

  const lastPicElement = useCallback((node) => {
    if (usersStore.loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (
        entries[0].isIntersecting &&
        hasMore(usersStore.users) &&
        !isSearching
      ) {
        setPage((prevPage) => prevPage + 1);
        setPage((prevPage) => prevPage + 1); // Caching of some sort
      }
    });
    if (node) observer.current.observe(node);
  });

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

  const getUsersJSX = () =>
    isEmpty(searchUsers)
      ? renderUsers(usersStore, lastPicElement, makeUserVisible)
      : renderUsers({ users: searchUsers }, lastPicElement, makeUserVisible);

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
      {!isEmpty(usersStore.users) && (
        <UserModel
          isModelVisible={isModelVisible}
          setModelVisible={setModelVisible}
          user={usersStore.users[modelUser]}
        />
      )}
      <Affix>
        <Search onUpdate={updateResults} />
      </Affix>
      <Row>{getUsersJSX()}</Row>
      {displaySpinner(usersStore.loading)}
      {displayEndCatalog(usersStore.users)}
    </React.Fragment>
  );
};

export default Home;
