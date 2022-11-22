import React from 'react'
import { TopNavBar } from '../../../../Components/TopNavBar'

export const NavigatorPlaneacion = ({children}:any) => {
  return (
    <>
        <TopNavBar/>
        <div>{children}</div>
    </>

  )
}
