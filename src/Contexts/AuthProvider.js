import React, { createContext, useEffect, useState } from "react";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    window.localStorage.getItem("Session")
      ? JSON.parse(window.localStorage.getItem("Session"))
      : { token: null, isLogged: false, uuid: null, roll: 0 }
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

  const setAuthData = (token, isLogged, uuid, rol) => {
    setAuth({ token: token, isLogged: isLogged, uuid: uuid, roll: rol});
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

  const [roll,setRoll]=useState(1);

  const setAuthRoll=(input)=>{
    setRoll(input);
  }

  return (
    <authContext.Provider
      value={{ auth, setAuthData, userAndPassword, setUserPassword, logOut, roll, setAuthRoll }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
