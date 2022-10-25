import React from 'react'
import './index.css'

interface assignatureComponentProps{
    item:any;
    onOpenModal: ()=>void;
}

export const AssignatureComponent = ({item, onOpenModal}:assignatureComponentProps) => {
  return (
    <>
      {item.assignatureName != '' ?
        <div onClick={onOpenModal} className='assignatureMainContainer'>
          {item.assignatureName}

          <div className='creditsAssignatureContainer'>
              <p> &nbsp; </p>
              <p>{item.credits[0].practicHours}</p>
              <p>{item.credits[0].theoreticalHours}</p>
              <p>{item.credits[0].totalCredits}</p>
          </div>
        </div>
        :        
      <div onClick={onOpenModal} className='assignatureMainContainer'>

      </div>
    
    
      }
    
    
    </>

  )
}
