import React, { createContext, useEffect, useState } from "react";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    window.localStorage.getItem("Session")
      ? JSON.parse(window.localStorage.getItem("Session"))
      : { token: null, isLogged: false, uuid: null }
  );
  const [userAndPassword, setUserAndPassword] = useState({
    user: "",
    password: "",
    verificationCode: "",
  });

  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("Session")));
  }, []);

  useEffect(() => {
    localStorage.setItem("Session", JSON.stringify(auth));
  }, [auth]);

  const setAuthData = (token, isLogged, uuid) => {
    setAuth({ token: token, isLogged: isLogged, uuid: uuid });
  };

  const setUserPassword = (userPassword) => {
    setUserAndPassword(userPassword);
  };

  const logOut = () => {
    setAuthData({ token: null, isLogged: false, uuid: null });
    setUserAndPassword({
      user: "",
      password: "",
      verificationCode: "",
    });
    localStorage.removeItem("Session");
  };

  return (
    <authContext.Provider
      value={{ auth, setAuthData, userAndPassword, setUserPassword, logOut }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
