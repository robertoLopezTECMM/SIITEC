import React, { useState } from 'react'
import { LogInContainer } from '../../../Components/Containers/LogInContainer/logInContainer'
import { TextInput } from '../../../Components/TextInputs/TextInputs'
import LogoTec from '../../../Assets/Images/logoTecJalisco.png'
import { PrimaryButton } from '../../../Components/Buttons/Buttons'
import { ValidateEmail } from '../../../Helpers/InputsValidator'
import { BadInputWarning } from '../../../Components/Warnings'
import { LoadingSpinner } from '../../../Components/LoadingSpinner'
import axiosInstance from '../../../Api/axiosInstance'
import { postForgotPasswordUrl } from '../../../Api/apiRoutes'
import swal from 'sweetalert'

interface recoveryEmailProps{
    buttonOnClick: () => void
}


export const RecoveryEmail = ({buttonOnClick}:recoveryEmailProps) => {
  const [recoveryEmail, setRecoveryEmail] = useState('')
  const [isEmailCorrect, setIsEmailCorrect] = useState(true)
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false)


  const onChangeTextInput = (inputValue:string) =>{
    console.log('INPUT VALUE: ', inputValue)
    setRecoveryEmail(inputValue)
  }

  const postRecoveryEmail = () =>{
    
    if(!ValidateEmail(recoveryEmail)){
      return setIsEmailCorrect(false)
    }else{
      setIsEmailCorrect(true)
      setShowLoadingSpinner(true)
      axiosInstance.post(postForgotPasswordUrl, {param:recoveryEmail} )
      .then((response)=>{
        console.log('Response: ', response)

        if(response.status === 200){
          buttonOnClick()
        }
        setShowLoadingSpinner(false)
      }).catch((err)=>{
        if(err.response.status===401){
          swal("Fallo!", "No se encontro una cuenta con este correo", "error")
          setShowLoadingSpinner(false)


        }
      })
    }
  }


    return (
        <div>
          <LoadingSpinner visible={showLoadingSpinner}/>

          <LogInContainer>
            <img className='logoTecImageTag' src={LogoTec}/>
            <h3>SIITEC</h3>
    
            <h2>Recuperar Contraseña</h2>

            
            <p className='messageToCodeVerfication'>Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes el acceso a tu cuenta</p>

            <TextInput textInputOnChange={onChangeTextInput} placeHolder='Correo electrónico'/>
            <br/>
            <br/>
            
            <BadInputWarning showWarning={!isEmailCorrect} warningText={'El correo que ingresaste no es correcto'} />

    
            <PrimaryButton buttonOnClick={postRecoveryEmail} textButton='Enviar'/>
    
            
          </LogInContainer>
        </div>
      )
}
