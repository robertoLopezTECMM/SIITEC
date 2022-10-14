import React, { useContext } from 'react'
import { authContext } from '../../Contexts/AuthProvider';
import { SideNavBar } from '../SideNavBar'
import './index.css'

export const TopNavBar = () => {
  const { logOut}:any = useContext(authContext);

  return (
    <div className='topNavBarContainer'>

      <div style={{width:'80px', height:'100%'}}>
        <SideNavBar/>
      </div>

        <p className='topNavBarTitle'>Tecnologico superior de jalisco</p>

        <button  onClick={logOut} className='topNavBarButton'>
            <i className="material-icons" style={{ fontSize: '2.75em', color:'white' }}>logout</i>
        </button>
        
    </div>
  )
}
