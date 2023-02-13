import React, { createContext, useEffect, useState } from "react";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    window.localStorage.getItem("Session")
      ? JSON.parse(window.localStorage.getItem("Session"))
      : { token: null, isLogged: false, uuid: null, roll: 0, email:null }
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

  const setAuthData = (token, isLogged, uuid, rol, email) => {
    setAuth({ token: token, isLogged: isLogged, uuid: uuid, roll: rol, email:email});
  };

  const setUserData = (user, password, code) =>{
    setUserAndPassword({user:user, password:password, verificationCode:code})
  }

  const setUserPassword = (userPassword) => {
    setUserAndPassword(userPassword);
  };

  const logOut = () => {
    setAuthData({ token: null, isLogged: false, uuid: null, email:null });
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
      value={{ auth, setAuthData, setUserData, userAndPassword, setUserPassword, logOut, roll, setAuthRoll }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
