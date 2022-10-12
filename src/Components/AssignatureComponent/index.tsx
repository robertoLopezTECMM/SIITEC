import React from 'react'
import './index.css'
export const AssignatureComponent = ({item}:any) => {
  return (
    <div className='assignatureMainContainer'>
        {item.assignatureName}

        <div className='creditsAssignatureContainer'>
            <p></p>
            <p>{item.credits[0].practicHours}</p>
            <p>{item.credits[0].theoreticalHours}</p>
            <p>{item.credits[0].totalCredits}</p>

        </div>
    </div>
  )
}
