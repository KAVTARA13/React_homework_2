import React, { useState, useEffect } from 'react';

import { API_SERVICE } from '../services/api';

export const UsersProvider = React.createContext(null);

function UsersProviderComponent({ children }) {
  const [usersList, setUsersList] = useState([]);

  const loadTodoData = async () => {
    const data = await API_SERVICE.getUsersListAsync({});
    setUsersList(data);
  };

  useEffect(() => {
    loadTodoData();
  }, []);

  const onUserAdd = (newUser) => {
    const newList = [...usersList, newUser];
    setUsersList(newList);
  };

  return (
    <UsersProvider.Provider value={{ usersList, setUsersList, onUserAdd }}>
      {children}
    </UsersProvider.Provider>
  );
}

export default UsersProviderComponent;
