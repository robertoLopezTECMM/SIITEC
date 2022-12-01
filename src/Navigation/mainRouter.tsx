import React, { useContext, useEffect } from "react";
import {  Routes, Route, useNavigate, redirect } from "react-router-dom";
import { DragDropContext} from "@hello-pangea/dnd";
import { authContext } from "../Contexts/AuthProvider";
import { ForgotPassword } from "../Screens/ForgotPassword";
import { Home } from "../Screens/Home";

import { LogIn } from "../Screens/LogIn/logIn";
import { TestScreen } from "../Screens/TestScreen";
import PrivateRoute from "./privateRoute";
import StudentValidator from "../Helpers/StudentValidator";


export default function MainRouter() {
  const { auth, roll }:any = useContext(authContext);
  const navigate = useNavigate()
  useEffect(() => {
    console.log('AUTH: ', auth)

    //if(auth.isLogged) {navigate('/home')}
    if(!auth.isLogged) {navigate('/')}

  }, [auth.isLogged])


  return (

    <Routes>
          <Route element={<PrivateRoute children={undefined} isAllowed={!auth.isLogged} redirect="/home"/>}>
            <Route path="/" element={<LogIn />}/>
          </Route>

          <Route element={<PrivateRoute children={undefined} isAllowed={!auth.isLogged} redirect="/home"/>}>
            <Route path="/forgotPassword" element={<ForgotPassword/>}/>
          </Route>
  
          <Route element={<PrivateRoute children={undefined} isAllowed={auth.isLogged} redirect="/"/>}>
            <Route path="/testScreen" element={<TestScreen/>}/>
            <Route path="/home" element={<Home/>}/> 
          </Route>
  
          <Route element={<PrivateRoute children={undefined} isAllowed={(auth.roll==1)} redirect="/alumno"/>}>
            <Route path="/alumno" element={<h1>home alumno</h1>}/>
            <Route path="/alumno1" element={<h1>ruta1</h1>}/>
            <Route path="/alumno2" element={<h1>ruta2</h1>}/>
          </Route>
          
          <Route element={<PrivateRoute children={undefined} isAllowed={(auth.roll==2)} redirect="/docente"/>}>
            <Route path="/docente" element={<h1>home docente</h1>}/>
            <Route path="/docente1" element={<h1>ruta1</h1>}/>
            <Route path="/docente2" element={<h1>ruta2</h1>}/> 
          </Route>
  
          <Route element={<PrivateRoute children={undefined} isAllowed={(auth.roll==4)} redirect="/admin"/>}>
            <Route path="/admin" element={<h1>home admin</h1>}/>  
          </Route>

          <Route element={<PrivateRoute children={undefined} isAllowed={(auth.roll==3)} redirect="/jefecarrera"/>}>
            <Route path="/jefecarrera" element={<h1>home jefe de carrera</h1>}/>  
          </Route>
  
          <Route element={<PrivateRoute children={undefined} isAllowed={(roll=='aspirante')} redirect="/home"/>}>
            <Route path="/aspirante" element={<h1>Aspirante</h1>}/>  
          </Route>
  
          <Route element={<PrivateRoute children={undefined} isAllowed={(roll=='dependencia')} redirect="/home"/>}>
            <Route path="/dependencias" element={<h1>Dependencias</h1>}/>  
          </Route>
  
          <Route element={<PrivateRoute children={undefined} isAllowed={(roll=='empresa')} redirect="/home"/>}>
            <Route path="/empresas" element={<h1>Empresas</h1>}/>  
          </Route>
  
          <Route element={<PrivateRoute children={undefined} isAllowed={(roll=='gobierno')} redirect="/home"/>}>
            <Route path="/gobierno" element={<h1>Gobierno</h1>}/>  
          </Route>
  
        </Routes>
      
  );
}