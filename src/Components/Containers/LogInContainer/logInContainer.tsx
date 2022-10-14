import React from 'react'
import './logInContainer.css'
import LogoTec from '../../../Assets/Images/logoTecJalisco.png'
import { PasswordTextInput, TextInput } from '../../TextInputs/TextInputs'
import { PrimaryButton } from '../../Buttons/Buttons'
import { RememberAccountCheckBox } from '../../ChecksBox/ChecksBox'
import ReCAPTCHA from "react-google-recaptcha";


export const LogInContainer = ({children}:any) => {

  return (
    <div className="mainLogInContainer">
      {children}
    </div>
  )
}
