import React from 'react'
import { TopNavBar } from '../../../../Components/TopNavBar'
import { slide as Menu } from 'react-burger-menu'
import './index.css'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const NavigatorConsejero = ({children, showDrawer}:any) => {
  return (
    <>
        <TopNavBar>
            {showDrawer ? 
                <Menu isOpen={false}   >
                    <img style={{width:'100%'}} src={require('../../../../Assets/Images/logoTecJaliscoWhite.png')}/>
                    <div className='sideNavPlaneacionItem'>
                        <p>Junta de Gobierno</p>
                        <ul>
                            <li>2021</li>
                            <li>2022</li>
                            <li>2023</li>
                        </ul>  
                    </div>

                </Menu>
            :null
        
            }

        </TopNavBar>
        <div style={{margin:'20px'}}>{children}</div>
    </>

  )
}
