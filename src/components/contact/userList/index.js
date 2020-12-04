import React from 'react';
import User from '../user';

const UserList = ({ userList }) => {
  return <User {...userList} />;
};

export default UserList;
