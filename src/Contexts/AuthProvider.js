import React, { createContext, useEffect, useState } from "react";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: null,
    isLogged: false,
    uuid: null,
  });
  const [userAndPassword, setUserAndPassword] = useState({
    user: "",
    password: "",
    verificationCode: "",
  });

  useEffect(() => {
    console.log(auth)
  }, [auth]);

  useEffect(() => {
    localStorage.setItem(
      "Session",
      JSON.stringify({ auth: auth, user: userAndPassword.user })
    );
    console.log(JSON.parse(localStorage.getItem("Session")));
    const session = JSON.parse(localStorage.getItem("Session"));
    if (session) {
      setAuthData({token: session.auth.token, isLogged: session.auth.isLogged, uuid: session.auth.uuid});
      // setUserAndPassword({...userAndPassword, user: session.user});
    }
  }, []);
  

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
    localStorage.removeItem('Session');
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
