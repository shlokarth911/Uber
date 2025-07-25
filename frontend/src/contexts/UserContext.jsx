import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
  });

  setUser;

  return (
    <>
      <UserDataContext.Provider value={user}>
        {children}
      </UserDataContext.Provider>
    </>
  );
};

export default UserContext;
