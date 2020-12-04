import React from 'react';
import Search from '../../components/contact/search';
import { ContactContext } from '../../context/contactContext';

const SearchContainer = () => {
  const [users, setUsers] = React.useContext(ContactContext);

  const getMyUsers = () => {
    return JSON.parse(window.localStorage.getItem('users'));
  };

  const searchUsers = (searchValue) => {
    if (searchValue) {
      const myUsers = getMyUsers();
      const searchedUsers = myUsers.filter((user) =>
        user.name.includes(searchValue),
      );
      setUsers(searchedUsers);
    } else {
      setUsers(getMyUsers());
    }
  };

  return <Search searchUsers={searchUsers} />;
};

export default SearchContainer;
