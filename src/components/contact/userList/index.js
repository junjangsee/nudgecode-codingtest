import React from 'react';
import User from '../user';
import { ContactContext } from '../../../context/contactContext';

const UserList = () => {
  const [users, setUsers] = React.useContext(ContactContext);

  const handleToggled = (name, favorite) => {
    console.log(name);
    const currentUsers = [...users];
    const user = currentUsers.find((user) => user.name === name);
    user.isFavorite = favorite;
    const newUsers = currentUsers;

    window.localStorage.clear();
    window.localStorage.setItem('users', JSON.stringify(newUsers));
    setUsers(newUsers);
  };

  return (
    <>
      {users.map((user, index) => (
        <User key={index} {...user} handleToggled={handleToggled} />
      ))}
    </>
  );
};

export default UserList;
