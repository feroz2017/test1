
import React, { useState, useRef, useCallback } from "react";

import { Col, Row } from "antd";
import UserCard from './UserCard'
import UserModel from './UserModel'

import {
    hasMore,
    isEmpty,
} from "../utils/common";

const getCard = (user, index, setModelVisible) => {
    return (
        <UserCard
            thumbnail={user.picture.thumbnail}
            first={user.name.first}
            last={user.name.last}
            email={user.email}
            onClick={setModelVisible}
            index={index}
        />
    );
};

const renderUsers = ( users , refElement, setModelVisible) => {
    return users.map((user, index) => (
        <Col
            style={{ marginBottom: "20px" }}
            className="gutter-row"
            span={4}
            key={index}
        >
            {" "}
            {users.length === index + 1 ? (
                <div ref={refElement}>{getCard(user, index, setModelVisible)}</div>
            ) : (
                getCard(user, index, setModelVisible)
            )}
        </Col>
    ));
};

const Grid = (props) => {
    let { searchUsers, usersStore ,onPageChange, isSearching} = props;
    let [modelUser, setModelUser] = useState(0);
    let [isModelVisible, setModelVisible] = useState(false);

    let observer = useRef();
    const lastPicElement = useCallback((node) => {
        if (usersStore.loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (
            entries[0].isIntersecting &&
            hasMore(usersStore.users) &&
            !isSearching
          ) {
            onPageChange(1)
            onPageChange(1)// Caching of some sort
          }
        });
        if (node) observer.current.observe(node);
      });
    const makeUserVisible = (index) => {
        setModelVisible(true);
        setModelUser(index);
      };
    
    const getUsersJSX = () =>
        isEmpty(searchUsers)
            ? renderUsers(usersStore.users, lastPicElement, makeUserVisible)
            : renderUsers(searchUsers , lastPicElement, makeUserVisible);

    return (
       <React.Fragment>
            {!isEmpty(usersStore.users) && (
            <UserModel
              isModelVisible={isModelVisible}
              setModelVisible={setModelVisible}
              user={usersStore.users[modelUser]}
            />
          )}
        <Row>{getUsersJSX()}</Row>
       </React.Fragment>
    );
};

export default Grid;
