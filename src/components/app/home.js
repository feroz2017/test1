import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Row, Col, Affix } from "antd";

import UserCard from "./UserCard";
import Search from "./search";
import { fetchUsers } from "../../redux/actions";

// Helpers functions
const renderUsers = ({ users }) => {
  console.log("Inside H", users);
  return users.map((user) => (
    <Col style={{ marginBottom: "20px" }} className="gutter-row" span={4}>
      {" "}
      <UserCard
        thumbnail={user.picture.thumbnail}
        first={user.name.first}
        last={user.name.last}
        email={user.email}
      />
    </Col>
  ));
};
const contains = (s1, s2) => s1.toLowerCase().includes(s2.toLowerCase());

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
const Home = () => {
  const dispatch = useDispatch();

  let usersStore = useSelector((state) => state.usersStore);

  let choiceStore = useSelector((state) => state.choiceStore);

  let [searchUsers, setSearchUsers] = useState([]);

  let [page, setPage] = useState(1); // For infinity Scroll Bar 

  let [loaded, setLoaded] = useState(false); // dfd

  useEffect(() => {

    dispatch(
      fetchUsers(
        `https://randomuser.me/api/?page=${page}&results=50&nat=${choiceStore}`
      )
    );
    setSearchUsers([...usersStore.users]);
  }, [page]);


  const updateResults = (searchTerm) => {
    if (!searchTerm) {
      setSearchUsers([...usersStore.users]);
    } else {
      const result = getSearchResults(usersStore.users, searchTerm.trim());
      setSearchUsers([...result]);
    }
  };

  if (usersStore.loading) {
    return "loading";
  }
  return (
    <Layout.Content style={{ padding: "0px 50px", marginTop: "20px" }}>
      <Affix>
        <Search onUpdate={updateResults} />
      </Affix>
      <Row>
        {" "}
        {searchUsers.length === 0
          ? renderUsers(usersStore)
          : renderUsers({ users: searchUsers })}{" "}
      </Row>
      {/* <Row>{renderUsers(usersStore)}</Row> */}
      {loaded ? <h>Loading</h> : null}
    </Layout.Content>
  );
};

export default Home;
