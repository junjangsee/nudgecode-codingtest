import React from 'react';
import UserList from '../../components/contact/userList';
import { ContactContext } from '../../context/contactContext';

const UserListContainer = () => {
  const [users, setUsers] = React.useContext(ContactContext);

  const handleToggled = (name, favorite) => {
    const currentUsers = [...users];
    const user = currentUsers.find((user) => user.name === name);
    console.log(user);
    user['isFavorite'] = favorite;
    console.log(user);
    const newUsers = currentUsers;
    setUsers(newUsers);

    window.localStorage.clear();
    window.localStorage.setItem('users', JSON.stringify(newUsers));
  };

  return <UserList handleToggled={handleToggled} users={users} />;
};

export default UserListContainer;
