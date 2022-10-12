import React, { useEffect } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { SideNavBar } from '../../Components/SideNavBar';
import { TopNavBar } from '../../Components/TopNavBar';
import Calendar from '../../Components/Calendar';
import { ReticulaComponent } from '../../Components/ReticulaComponent';




export const Home = () => {

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
