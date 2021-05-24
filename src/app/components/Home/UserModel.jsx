import React from "react";
import {Modal} from 'antd'
export default function UserModel(props) {
  let {isModelVisible,setModelVisible,user} = props;
  const makeDisapper = ()=>setModelVisible(false);
  return (
    <Modal
      visible={isModelVisible}
      onCancel={makeDisapper}
      onOk={makeDisapper}
    >
      <p>{user.email}</p>
      <p>Street: {user.location.street.name}</p>
      <p>City: {user.location.city}</p>
      <p>Sate: {user.location.state}</p>
      <p>Country: {user.location.country}</p>
      <p>PostCode: {user.location.postcode}</p>
      <p>Phone: {user.phone}</p>
    </Modal>
  );
}
