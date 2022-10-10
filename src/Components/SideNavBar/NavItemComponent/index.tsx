import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

interface navItemComponentProps{
  eventKey: string;
  icon: string;
  text: string
}


export const NavItemComponent = ({eventKey, icon, text}:navItemComponentProps) => {
  return (
    <NavItem eventKey={eventKey}>
      <NavIcon>
          <i className="material-icons" style={{ fontSize: '2.75em' }}>
            {icon}
          </i>
      </NavIcon>
    <NavText>
        {text}
    </NavText>
</NavItem>
  )
}
