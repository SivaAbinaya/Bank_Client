import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { name: "Siva Abinaya", email: "sivaabinaya@gmail.com", password: "sivaabinaya", amount: 1000, transactions: [] }
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;