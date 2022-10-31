import React, { useContext, useEffect } from "react";
import {  Routes, Route, useNavigate } from "react-router-dom";
import { DragDropContext} from "@hello-pangea/dnd";
import { authContext } from "../Contexts/AuthProvider";
import { ForgotPassword } from "../Screens/ForgotPassword";
import { Home } from "../Screens/Home";

import { LogIn } from "../Screens/LogIn/logIn";
import { TestScreen } from "../Screens/TestScreen";

export default function MainRouter() {
  const { auth }:any = useContext(authContext);
  const navigate = useNavigate()
  useEffect(() => {

    if(auth.isLogged) {navigate('/home')}
    if(!auth.isLogged) {navigate('/home')}

  }, [auth.isLogged])
  

  return (
      <Routes>
          
        <Route path="/" element={<LogIn />}/>
        <Route path="/forgotPassword" element={!auth.isLogged? <ForgotPassword/> : <Home/>}/>
        <Route path="/testScreen" element={<TestScreen/>}/>    
        <Route path="/home" element={auth.isLogged? <TestScreen/>:<TestScreen/>}/> 
                  
      </Routes>
  );
}