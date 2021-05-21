import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Row, Col, Affix , Spin, Modal} from "antd";

import UserCard from "./UserCard";
import Search from "./Search";
import { fetchUsers } from "../../redux/actions";

// Helpers functions
const renderUsers = ({ users },refElement, setModelVisible) => {
  return users.map((user,index) => (
    <Col style={{ marginBottom: "20px" }} className="gutter-row" span={4}>
      {" "}
      {
        users.length === index + 1 ?
        <div ref={refElement}>
      <UserCard
        thumbnail={user.picture.thumbnail}
        first={user.name.first}
        last={user.name.last}
        email={user.email}
        onClick={setModelVisible}
        index={index}
      />
      </div>
      :
      <UserCard
        thumbnail={user.picture.thumbnail}
        first={user.name.first}
        last={user.name.last}
        email={user.email}
        onClick={setModelVisible} 
        index={index}
      />
      }
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

const hasMore = (arr, limit = 200)=>arr.length <= limit;


// Main Component
const Home = () => {
  const dispatch = useDispatch();

  let usersStore = useSelector((state) => state.usersStore);
  let choiceStore = useSelector((state) => state.choiceStore);
  let [searchUsers, setSearchUsers] = useState([]);
  let [modelUser, setModelUser] = useState(0)
  let [isModelVisible, setModelVisible] = useState(false);

  let [page, setPage] = useState(1); // For infinity Scroll Bar 
  let observer = useRef();

  const makeUserVisible = (index)=>{
    setModelVisible(true)
    setModelUser(index)
  }

  const lastPicElement = useCallback(node => {
    if(usersStore.loading) return
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore(usersStore.users)){
        setPage(prevPage => prevPage + 1);
        setPage(prevPage => prevPage + 1); // Caching of some sort
      }
    })
    if(node) observer.current.observe(node)
  });

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

  return (
    <Layout.Content style={{ padding: "0px 50px", marginTop: "20px" }}>

      {
        usersStore.users != 0  && <Modal visible={isModelVisible} onCancel={()=>{setModelVisible(false)}}>
        <p>{usersStore.users[modelUser].email}</p>
        <p>Street: {usersStore.users[modelUser].location.street.name}</p>
        <p>City: {usersStore.users[modelUser].location.city}</p>
        <p>Sate: {usersStore.users[modelUser].location.state}</p>
        <p>PostCode: {usersStore.users[modelUser].location.postcode}</p>
        <p>Phone: {usersStore.users[modelUser].phone}</p>
          </Modal>
      }

      <Affix>
        <Search onUpdate={updateResults} />
      </Affix>
      <Row>
        {" "}
        {searchUsers.length === 0
          ? renderUsers(usersStore, lastPicElement, makeUserVisible)
          : renderUsers({ users: searchUsers },lastPicElement, makeUserVisible)}{" "}
          
      </Row>
      {
            usersStore.loading ? <Spin style={{marginLeft:"50%"}} tip="Loading..."/>: null
      }
      {
              hasMore(usersStore.users) ? null : <h1 style={{marginLeft:"50%"}} tip="Loading...">End Of Catalog</h1> 
      }
    </Layout.Content>
  );
};

export default Home;
