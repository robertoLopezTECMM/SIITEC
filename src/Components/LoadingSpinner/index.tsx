import React from 'react'
import './index.css'

interface loadingSpinnerProps{
  visible: boolean
}

export const LoadingSpinner = ({visible}:loadingSpinnerProps) => {
  return (
    <>
    
    {visible ?
      <div className="spinner-container"> 
        <div className="loading-spinner">
        </div>
      </div>
    :null
    }
    </>

  )
}
