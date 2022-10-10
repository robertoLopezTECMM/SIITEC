import React, { useEffect } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { SideNavBar } from '../../Components/SideNavBar';
import { TopNavBar } from '../../Components/TopNavBar';
import Calendar from '../../Components/Calendar';




export const Home = () => {

  return (
    <div>
      {/* <SideNavBar/> */}
      <TopNavBar/>
      <div>
        <Calendar/>
      </div>
      
    </div>
  )
}
