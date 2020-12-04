import React from 'react';
import User from '../user';

const UserList = ({ handleToggled, users }) => {
  return (
    <>
      {users.map((user, index) => (
        <User key={index} {...user} handleToggled={handleToggled} />
      ))}
    </>
  );
};

export default UserList;
