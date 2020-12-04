import React from 'react';

export const ContactContext = React.createContext();

export const ContactProvider = ({ children }) => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(async () => {
    if (!window.localStorage.getItem('users')) {
      try {
        const response = await fetch('http://localhost:4000/user/list');
        const results = await response.json();
        const sortedResults = results.sort((a, b) =>
          a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
        );
        const initialUsers = sortedResults.map((result) => {
          return {
            ...result,
            isFavorite: false,
          };
        });
        setUsers(initialUsers);
        window.localStorage.setItem('users', JSON.stringify(initialUsers));
      } catch (error) {
        throw new Error(error);
      }
    } else {
      const getUsers = JSON.parse(window.localStorage.getItem('users'));
      setUsers(getUsers);
    }
  }, []);

  return (
    <ContactContext.Provider value={[users, setUsers]}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
