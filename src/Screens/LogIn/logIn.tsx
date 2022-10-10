import React, { useContext, useState } from 'react'
import './logIn.css'
import { VerificationCodeScreen } from './VerificationCodeScreen/verificationCodeScreen'
import { LogInScreen } from './LogInScreen/logInScreen'
import { authContext } from '../../Contexts/AuthProvider'
import { redirect, useNavigate } from 'react-router-dom'



export const LogIn = () => {
    const [stepActive, setStepActive] = useState('login')
    const navigate = useNavigate();
    const [reload, setReload] = useState(0)

    const { auth, setAuthData }:any = useContext(authContext);

    const handleToVerificationCode = () =>{
        setStepActive('checkVerificationCode')
    }




    return (
      <div className="mainContainer">
             { stepActive === 'login' ?
                <LogInScreen handleNextStep={()=>handleToVerificationCode()}/>
            : stepActive === 'checkVerificationCode'?
                <VerificationCodeScreen/>
            :null
            }
      </div>

 
    
  )
}
