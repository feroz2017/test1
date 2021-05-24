import React from "react";
import { Card } from "antd";

const UserCard = (props) => {
  const { thumbnail, first, last, email, index, onClick } = props;
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="exapl" src={thumbnail} />}
      onClick={() => onClick(index)}
    >
      <Card.Meta title={`${first} ${last}`} description={email} />
    </Card>
  );
};

export default UserCard;
