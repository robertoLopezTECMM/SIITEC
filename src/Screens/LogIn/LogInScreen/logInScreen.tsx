import React, { useContext, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { PrimaryButton } from '../../../Components/Buttons/Buttons'
import { CheckBox } from '../../../Components/ChecksBox/ChecksBox'
import { LogInContainer } from '../../../Components/Containers/LogInContainer/logInContainer'
import { InputText, InputTextPassword, PasswordTextInput, TextInput } from '../../../Components/TextInputs/TextInputs'
import { VerificationCodeScreen } from '../VerificationCodeScreen/verificationCodeScreen'
import './logInScreen.css'
import LogoTec from '../../../Assets/Images/logoTecJalisco.png'
import { Link } from 'react-router-dom'
import axiosInstance from '../../../Api/axiosInstance'
import { getVerificationCodeUrl } from '../../../Api/apiRoutes'
import { LoadingSpinner } from '../../../Components/LoadingSpinner'
import { authContext } from '../../../Contexts/AuthProvider'
import swal from 'sweetalert'

interface logInInterface {
  handleNextStep: () => void
}

export const LogInScreen = ({handleNextStep}:logInInterface) => {

  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const { userAndPassword, setUserPassword }:any = useContext(authContext);

  const onChangePasswords = (inputValue:string, fieldId:string) =>{

    if(fieldId === 'user') setUser(inputValue)
    if(fieldId === 'password') setPassword(inputValue)
  
  }

  const onChangeUser = (inputValue:string) =>{
    console.log('valueUser: ', inputValue)
    setUser(inputValue)
  }

  const onChangePassword = (inputValue:string) =>{
    console.log('VALUE: ', inputValue)
    setPassword(inputValue)
  }




  const getVerificationCode = () => {
    setShowLoadingSpinner(true)
    console.log(user, password)
    axiosInstance.post(getVerificationCodeUrl, {user:user, password:password} )
    .then((response)=>{
      console.log('Response: ', response)

      if(response.status===200){
        setUserPassword({user:user, password:password, verificationCode:''})
      }
      setShowLoadingSpinner(false)
      handleNextStep()
    }).catch((err)=>{
      if(err.response.status===401){
        setShowLoadingSpinner(false)
        swal("Fallo!", "La contraseña o el usuario ingresado no son los correctos", "error")
      }else{
        setShowLoadingSpinner(false)
        swal("Fallo!", "Fallo la comunicacion", "error")
      }

    })
  }

  return (
    <div>
      <LoadingSpinner visible={showLoadingSpinner}/>
      <LogInContainer>
        <img className='logoTecImageTag' src={LogoTec}/>
        {/* <h3>SIITEC</h3> */}

        <h2>Inicio de sesión</h2>
        <InputText
            labelText='Usuario'
            textInputOnChange={onChangeUser}
            placeholder='Email, Curp, Celular, Rfc'
        />
        <InputTextPassword
            labelText='Contraseña'
            passwordOnchange={onChangePassword}
            placeholder='Escriba su contraseña'


        />
        {/* <PasswordTextInput passwordOnchange={onChangePasswords} placeHolder='Email, Curp, Celular, Rfc' fieldId='user'/>
        <br/>
        <br/>
        <PasswordTextInput isForPassword placeHolder='contraseña' passwordOnchange={onChangePasswords} passwordValue={''} fieldId='password'/>
        <br/>
        <br/> */}

        <div className='captchaContainer'>
          <ReCAPTCHA sitekey={'6LeuDx8iAAAAAL8osYNEEiZNJACVSGSTEkV_Z6-2'}/>
        </div>

        <br/>
        <br/>

        <PrimaryButton buttonOnClick={()=>getVerificationCode()} textButton='Iniciar sesión'/>

        <br/>
        <br/>

        <CheckBox labelCheckBox='Recordarme' onChange={()=>console.log('hi')}/>
        <br/>
        <br/>

        <div className='restorePswdAndCreateAccountContainer'>
        <Link to='/forgotPassword'> Recuperar contraseña </Link>
        <a> | </a>
        <Link to='/testScreen'> Test Screen </Link>        
        </div>
    </LogInContainer>
    </div>
  )
}
