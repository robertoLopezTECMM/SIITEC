import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { authContext } from '../Contexts/AuthProvider';

 const PrivateRoute = ({ children, isAllowed, redirect }) => {

    //const { auth } = useContext(authContext);

    /*if (auth.isLogged) {
        return <Navigate to="/home" />;
    }*/
    if(!isAllowed){
        return <Navigate to={redirect}/>
    }
    return children? children: <Outlet/>
};

export default PrivateRoute