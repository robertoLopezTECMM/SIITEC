import React, { useContext, useEffect } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { SideNavBar } from '../../Components/SideNavBar';
import { TopNavBar } from '../../Components/TopNavBar';
import Calendar from '../../Components/Calendar';
import { ReticulaComponent } from '../../Components/ReticulaComponent';
import { authContext } from '../../Contexts/AuthProvider';




export const Home = () => {

  const {auth, roll}:any=useContext(authContext)

  console.log(typeof(roll))

  return (
    <div>
      {/* <SideNavBar/> */}
      <TopNavBar/>
      <div style={{width:'1300px', height:'700px', margin:'auto'}}>
        {/* <Calendar/> */}
        <ReticulaComponent/>
      </div>
      
    </div>
  )
}
