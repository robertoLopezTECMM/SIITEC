import React, { createContext, useEffect, useState } from 'react';

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, isLogged:false, uuid:null});
  const [userAndPassword, setUserAndPassword] = useState({user:'', password:'', verificationCode:''})

  useEffect(() => {
        console.log(auth)
  }, [auth])
     

  const setAuthData = (token, isLogged, uuid) => {
    setAuth({token: token, isLogged:isLogged, uuid:uuid});
  };

  const setUserPassword = (userPassword) =>{
    setUserAndPassword(userPassword)
  }

  return (
    <authContext.Provider value={{ auth, setAuthData, userAndPassword, setUserPassword}}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;