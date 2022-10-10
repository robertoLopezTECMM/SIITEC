import React, { useContext, useEffect } from "react";
import {  Routes, Route, useNavigate } from "react-router-dom";
import { authContext } from "../Contexts/AuthProvider";
import { ForgotPassword } from "../Screens/ForgotPassword";
import { Home } from "../Screens/Home";

import { LogIn } from "../Screens/LogIn/logIn";

export default function MainRouter() {
  const { auth }:any = useContext(authContext);
  const navigate = useNavigate()
  useEffect(() => {
    console.log('AUTH: ', auth)

    if(auth.isLogged) {navigate('/home')}
    if(!auth.isLogged) {navigate('/')}

  }, [auth.isLogged])
  

  return (
      <Routes>
          
        <Route path="/" element={<LogIn />}/>
        <Route path="/forgotPassword" element={!auth.isLogged? <ForgotPassword/> : <Home/>}/>  
        <Route path="/home" element={auth.isLogged ? <Home/> : <LogIn/>}/> 
                  
      </Routes>
  );
}