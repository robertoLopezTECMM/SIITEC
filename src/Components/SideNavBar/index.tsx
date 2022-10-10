
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

    // <div>

    //   <SideNav
    //       onSelect={(selected:any) => {
    //           // Add your code here
    //           console.log(selected)
    //       }}
    //      style={{background:'#00A29A'}}
    //   >
    //       <SideNav.Toggle />
    //       <SideNav.Nav defaultSelected="home">

    //         <NavItem  eventKey="home">
    //             <NavIcon>
    //                 <i className="material-icons" style={{ fontSize: '2.75em' }}>home</i>
    //             </NavIcon>
    //             <NavText>
    //                 Home
    //             </NavText>
    //         </NavItem>

    //         <br/>
            
    //         <NavItem eventKey="controlEscolar">
    //             <NavIcon>
    //                 <i className="material-icons" style={{ fontSize: '2.75em' }}>receipt_long</i>
    //             </NavIcon>
    //             <NavText>
    //                 Control Escolar
    //             </NavText>
    //         </NavItem>

    //         <br/>

    //         <NavItem eventKey="calificaciones">
    //             <NavIcon>
    //                 <i className="material-icons" style={{ fontSize: '2.75em' }}>assignment</i>
    //             </NavIcon>
    //             <NavText>
    //                 Calificaciones
    //             </NavText>
    //         </NavItem>

    //         <br/>

    //         <NavItem eventKey="inscripcion">
    //             <NavIcon>
    //                 <i className="material-icons" style={{ fontSize: '2.75em' }}>home</i>
    //             </NavIcon>
    //             <NavText>
    //                 Inscripcion
    //             </NavText>
    //         </NavItem>
    //           {/* <NavItem eventKey="charts">
    //               <NavIcon>
    //                 <i className="material-icons" style={{ fontSize: '1.75em' }}>home</i>
    //               </NavIcon>
    //               <NavText>
    //                   Charts
    //               </NavText>
    //               <NavItem eventKey="charts/linechart">
    //                   <NavText>
    //                       Line Chart
    //                   </NavText>
    //               </NavItem>
    //               <NavItem eventKey="charts/barchart">
    //                   <NavText>
    //                       Bar Chart
    //                   </NavText>
    //               </NavItem>
    //           </NavItem> */}
    //       </SideNav.Nav>
    //   </SideNav>
    // </div>
  )
}
