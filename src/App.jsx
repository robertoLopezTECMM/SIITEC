import React, { useContext } from 'react';
import { lazy, Suspense, } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter

} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { LogInScreen } from './Screens/LogIn/LogInScreen/logInScreen';
import { LogIn } from './Screens/LogIn/logIn';
import MainRouter from './Navigation/mainRouter';
import { authContext } from './Contexts/AuthProvider';
import PublicRoute from './Navigation/publicRoute';
import { ForgotPassword } from './Screens/ForgotPassword';
import PrivateRoute from './Navigation/privateRoute';
import ProtectedRoutes from './Navigation/protectedRoutes';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// or for Day.js
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// or for Luxon
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
// or for Moment.js
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';



function App() {
  
  return(
      <div className="App">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BrowserRouter>
            <MainRouter/>
          </BrowserRouter>
        </LocalizationProvider>
      </div>
  ) 

}

export default App;
