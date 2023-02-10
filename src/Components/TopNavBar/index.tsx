import React, { useContext } from 'react'
import swal from 'sweetalert';
import { authContext } from '../../Contexts/AuthProvider';
import { SideNavBar } from '../SideNavBar'
import './index.css'

// this component receives a children, this children is the content of the sideNav menu
export const TopNavBar = ({children}:any) => {
  const { logOut}:any = useContext(authContext);

  const logOutAlert = () => {
    swal("Atención!", "estas cerrando sesion", "warning").then(logOut)
  }

  return (
    <div className='topNavBarContainer'>

      <div style={{width:'80px', height:'100%'}}>
        {children} 
      </div>

      <p className='topNavBarTitle'>Tecnologico superior de jalisco</p>

      <button onClick={logOutAlert} className='topNavBarButton'>
        <i className="material-icons" style={{ fontSize: '2.75em', color:'white' }}>logout</i>
      </button>
        
    </div>
  )
}
