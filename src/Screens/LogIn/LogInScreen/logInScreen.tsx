import React, { useContext, useEffect, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { GooglePrimaryButton, PrimaryButton } from '../../../Components/Buttons/Buttons'
import { CheckBox } from '../../../Components/ChecksBox/ChecksBox'
import { LogInContainer } from '../../../Components/Containers/LogInContainer/logInContainer'
import { InputText, InputTextPassword, PasswordTextInput, TextInput } from '../../../Components/TextInputs/TextInputs'
import { VerificationCodeScreen } from '../VerificationCodeScreen/verificationCodeScreen'
import './logInScreen.css'
import LogoTec from '../../../Assets/Images/newLogoTecJalisco.png'
import { Link } from 'react-router-dom'
import axiosInstance from '../../../Api/axiosInstance'
import { getVerificationCodeUrl, postGoogleAuth } from '../../../Api/apiRoutes'
import { LoadingSpinner } from '../../../Components/LoadingSpinner'
import { authContext } from '../../../Contexts/AuthProvider'
import swal from 'sweetalert'
// import { GoogleButton } from '../../../Components/googleButton'
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';

import { gapi } from 'gapi-script';

interface logInInterface {
  handleNextStep: () => void
}

export const LogInScreen = ({handleNextStep}:logInInterface) => {

  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const { userAndPassword, setUserPassword }:any = useContext(authContext);
  const clientId = '116926260799-t29jjjuclulishgfhk9q0ng44gll879g.apps.googleusercontent.com'

  useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: clientId,
          scope: ''
        });
     };
     gapi.load('client:auth2', initClient);
 });

  const onSuccessFunction = (res:any) => {
    console.log('success:', res);

    axiosInstance.post(postGoogleAuth, {id_token:res.credential} )
    .then((response)=>{

      
      console.log('RESPONSE: ', response)
      console.log('noControl: ', response.data.no[0].administrativo)
      console.log('token: ', response.data.token)

      //edcore maestro
      if(response.data.rol[0] === 3) window.location.replace(`http://developer.tecmm.mx:8080/core/sec/sso1?token=${response.data.token}&noNomina=${response.data.no[0].docente}  http://developer.tecmm.mx:8080/alum/sec/sso3?token=${response.data.token}&noControl=${response.data.no[0].noControl}`)
      
      //edcore alumno
      if(response.data.rol[0] === 2) window.location.replace(`http://developer.tecmm.mx:8080/alum/sec/sso3?token=${response.data.token}&noControl=${response.data.no[0].noControl}`)

    }).catch((err)=>{
      console.log(err)
      if(err.response.status===401){
        setShowLoadingSpinner(false)
        swal("Fallo!", "La contraseña o el usuario ingresado no son los correctos", "error")
      }else{
        setShowLoadingSpinner(false)
        swal("Fallo!", "Fallo la comunicacion", "error")
      }

    })
  };

  const onFailure = (err:any) => {
    console.log('failed:', err);
  };

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

  const googleLogin = useGoogleLogin({
    onSuccess: credentialResponse => onSuccessFunction(credentialResponse),
    flow:'auth-code'
  });


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
    <div className='loginScreenContainer'>
      <LoadingSpinner visible={showLoadingSpinner}/>


      <div className='loginFormContainer'>

        <img className='logoTecImageTag' src={LogoTec}/>
        <h2>Inicio de sesión</h2>
        <div>
          <p>Si eres estudiante, docente o personal administrativo, inicia sesion con tu cuenta institucional aqui</p>
          <br/>

          <div style={{margin:'auto', textAlign:'center'}}>
            <GoogleLogin
              onSuccess={credentialResponse =>onSuccessFunction(credentialResponse)}
              onError={()=>{console.log('login fail')}}
            />
          </div>

        </div>

        <div className="divider"><span></span><span>o</span><span></span></div>
        
        
        <InputText
            labelText='Usuario'
            textInputOnChange={onChangeUser}
            placeholder='Email, Curp, Celular, Rfc'
        />
        <br/>
        <InputTextPassword
            labelText='Contraseña'
            passwordOnchange={onChangePassword}
            placeholder='Escriba su contraseña'
        />


        {/* <div className='captchaContainer'>
          <ReCAPTCHA sitekey={'6LeuDx8iAAAAAL8osYNEEiZNJACVSGSTEkV_Z6-2'}/>
        </div> */}

        <br/>

        <PrimaryButton buttonOnClick={()=>getVerificationCode()} textButton='Iniciar sesión'/>

        <br/>

        {/* <CheckBox labelCheckBox='Recordarme' onChange={()=>console.log('hi')}/> */}
        <br/>


        <div className='restorePswdAndCreateAccountContainer'>
          
            <Link id='restorePswdLink' to='/forgotPassword'> Recuperar contraseña </Link>    
   
        </div>

      </div>

    </div>
  )
}
