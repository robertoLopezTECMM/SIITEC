import React from 'react'
import './index.css'

interface badInputWarningProps{
    warningText: string;
    showWarning: boolean;
}

export const BadInputWarning = ({warningText, showWarning}:badInputWarningProps) => {
  return (
    <>
      { showWarning ?
        <div className='badInputWarningContainer'>
          <p>{warningText}</p>
        </div>
        :null
      }
    </>
  )
}
