import React from 'react';
import UserList from '../../components/contact/userList';
import { ContactContext } from '../../context/contactContext';

const UserListContainer = () => {
  const [users, setUsers] = React.useContext(ContactContext);
  const allUsers = JSON.parse(window.localStorage.getItem('users'));

  const sortedUsrs = users.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
  );

  const handleToggled = (name) => {
    const newUsers = users.map((user) => {
      return user.name === name
        ? { ...user, isFavorite: !user.isFavorite }
        : user;
    });
    setUsers(newUsers);

    const updatedUsers = allUsers.map((user) => {
      return user.name === name
        ? { ...user, isFavorite: !user.isFavorite }
        : user;
    });

    window.localStorage.clear();
    window.localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return <UserList handleToggled={handleToggled} users={sortedUsrs} />;
};

export default UserListContainer;
