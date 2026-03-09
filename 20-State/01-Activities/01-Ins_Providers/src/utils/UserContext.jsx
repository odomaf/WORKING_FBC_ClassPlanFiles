import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    name: 'Tom',
    role: 'Admin',
    id: 12758,
  });

  return (
    <UserContext.Provider value={{ currentUser: currentUser }} {...props} />
  );
};

export default UserProvider;
