import React from 'react';

export const ContactContext = React.createContext();

export const ContactProvider = ({ children }) => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(async () => {
    if (!window.localStorage.getItem('users')) {
      try {
        const response = await fetch('http://localhost:4000/user/list');
        const results = await response.json();
        setUsers(results);
        window.localStorage.setItem('users', JSON.stringify(results));
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
