import React, { useState } from "react";
import { useMemo } from "react";
import { createContext } from "react";

export const UserContext = createContext(null);

const UserContextInfo = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
  const userAuthInfo = useMemo(() => {
    return {
      isAuth,
      setIsAuth,
    };
  }, [isAuth]);

  return (
    <UserContext.Provider value={userAuthInfo}>{children}</UserContext.Provider>
  );
};

export default UserContextInfo;
