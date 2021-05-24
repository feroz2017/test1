import React from "react";
import { Col } from "antd";

import UserCard from "../components/UserCard";

// Helpers
import { contains } from "./common";

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

export const renderUsers = ({ users }, refElement, setModelVisible) => {
  return users.map((user, index) => (
    <Col style={{ marginBottom: "20px" }} className="gutter-row" span={4} key={index}>
      {" "}
      {users.length === index + 1 ? (
        <div ref={refElement}>{getCard(user, index, setModelVisible)}</div>
      ) : (
        getCard(user, index, setModelVisible)
      )}
    </Col>
  ));
};

export const getSearchResults = (data, term) =>
  data.filter((element) => {
    if (
      contains(element.name.first, term) ||
      contains(element.name.last, term)
    ) {
      return element;
    }
  });
