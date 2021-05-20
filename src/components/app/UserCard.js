import React from "react";
import { Card } from "antd";
const UserCard = (props) => {
  const { thumbnail, first, last, email } = props;
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="exapl" src={thumbnail} />}
    >
      <Card.Meta title={`${first} ${last}`} description={email} />
    </Card>
  );
};

export default UserCard;
