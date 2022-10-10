import React from 'react'
import { SideNavBar } from '../SideNavBar'
import './index.css'

export const TopNavBar = () => {
  return (
    <div className='topNavBarContainer'>

      <div style={{width:'80px', height:'100%'}}>
        <SideNavBar/>
      </div>

        <p className='topNavBarTitle'>Tecnologico superior de jalisco</p>

        <button className='topNavBarButton'>
            <i className="material-icons" style={{ fontSize: '2.75em', color:'white' }}>logout</i>
        </button>
        
    </div>
  )
}
