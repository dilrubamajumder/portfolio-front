import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem('book-review-token'))
    if (token) {
        const { id, username } = token
        setUser({id, username}) 
    } else {
        setUser(null)
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
