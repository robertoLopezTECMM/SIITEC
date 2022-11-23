
import React, { useEffect } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { NavItemComponent } from './NavItemComponent';
import { slide as Menu } from 'react-burger-menu'
import './index.css'




export const SideNavBar = () => {

  return (
    <>
      <Menu isOpen   >
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a className="menu-item--small" href="">Settings</a>
      </Menu>
    </>
  )
}
