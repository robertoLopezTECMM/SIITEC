import React, { useContext, useEffect, useState } from 'react'
import { PrimaryButton } from '../../../Components/Buttons/Buttons'
import { LogInContainer } from '../../../Components/Containers/LogInContainer/logInContainer'
import { PasswordTextInput, TextInput } from '../../../Components/TextInputs/TextInputs'
import LogoTec from '../../../Assets/Images/logoTecJalisco.png'
import './index.css'
import { BadInputWarning } from '../../../Components/Warnings'
import { authContext } from '../../../Contexts/AuthProvider'
import axiosInstance from '../../../Api/axiosInstance'
import { putNewPasswordsUrl } from '../../../Api/apiRoutes'
import swal from 'sweetalert'
import { Navigate, useNavigate } from 'react-router-dom'

interface newPasswordsProps{
  onChangeStep: () => void;
}


export const NewPasswords = ({onChangeStep}:newPasswordsProps) => {
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const [passwordMatchWarning, setPasswordMatchWarning] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('')
  const { auth, setAuthData, userAndPassword }:any = useContext(authContext);
  const navigate = useNavigate()


  useEffect(() => {
    console.log('AUTH: ', auth)
  }, [])
  
  const onChangePasswords = (inputValue:string, fieldId:string) =>{
    if(fieldId === 'newPass') setNewPassword(inputValue)
    if(fieldId === 'passConfirm') setNewPasswordConfirm(inputValue)
  }

  const postPasswords = () =>{
    console.log(newPassword)
    console.log(newPasswordConfirm)
    console.log(auth.uuid)

    if(newPassword === newPasswordConfirm){
      setPasswordsMatch(true)
      axiosInstance.put(putNewPasswordsUrl, {password:newPassword, uuid:auth.uuid} )
      .then((response)=>{
        console.log('Response: ', response)
        swal("Exito!", "Tu constraseña se cambio correctamente", "success")
        .then((value)=>{
          navigate('/')
        })
      }).catch((err)=>{
        console.log(err)
        if(err.response.status === 406){
          setPasswordsMatch(false)
          setPasswordMatchWarning('Las contraseñas no cumplen con las caracteristicas')
        }
      })
    }else{
      setPasswordsMatch(false)
      setPasswordMatchWarning('Las contraseñas no coinciden')
    }
  }

  return (
    <div>
    <LogInContainer>
      <img className='logoTecImageTag' src={LogoTec}/>
      <h3>SIITEC</h3>

      <h2>Ingresa tu nueva contraseña</h2>

      
      <p className='indicationsToNewPassword'>
        Te recomendamos que tu cuenta contenga:<br/>
        * Por lo menos una letra mayuscula<br/>
        * Por lo menos un caracter especial (@/*+%)<br/>
        * Por lo menos 1 numero
      </p>

      <PasswordTextInput isForPassword placeHolder='Nueva contraseña' passwordOnchange={onChangePasswords} passwordValue={newPassword} fieldId='newPass'/>
      <br/>
      <br/>
      <PasswordTextInput isForPassword placeHolder='Confirmar nueva contraseña' passwordOnchange={onChangePasswords} passwordValue={newPasswordConfirm} fieldId='passConfirm'/>
      <br/>

      {!passwordsMatch ? 
        <BadInputWarning warningText={passwordMatchWarning} showWarning={!passwordsMatch} />
        :null
      }



      <PrimaryButton buttonOnClick={()=>postPasswords()} textButton='Enviar'/>

      
  </LogInContainer>

    {/* stepActive === 'login' ?
        <LogInContainer/>
    : stepActive === 'checkVerificationCode'?
      <VerificationCodeScreen/>
    :null
*/}
  </div>
  )
}
