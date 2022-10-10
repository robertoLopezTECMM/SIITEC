import React, { useContext, useState } from 'react'
import { LogInContainer } from '../../../Components/Containers/LogInContainer/logInContainer'
import { Zoom } from "react-awesome-reveal";
import LogoTec from '../../../Assets/Images/logoTecJalisco.png'
import './index.css'
import ReactInputVerificationCode from 'react-input-verification-code';
import Timer from '../../../Components/Timer/timer';
import { CounterButton } from '../../../Components/Buttons/Buttons';
import { LoadingSpinner } from '../../../Components/LoadingSpinner';
import axiosInstance from '../../../Api/axiosInstance';
import { postCodeForgotPasswordUrl } from '../../../Api/apiRoutes';
import AuthProvider, { authContext } from '../../../Contexts/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';

interface verificationCodeScreenProps{
  message: string;
  onCompleteFourDigits: () => void;
  onChangeStep: () => void;
}



export const VerificationCodeScreen = ({message, onCompleteFourDigits, onChangeStep}:verificationCodeScreenProps) => {
    const [showLoadingSpinner, setShowLoadingSpinner] = useState(false)
    const { setAuthData, userAndPassword }:any = useContext(authContext);
    const navigate = useNavigate()

    const onChangeFourDigits = (code:string) =>{
      if(code.includes('·')){
        
        return console.log('todavia tiene puntos en el numero')
      }else{
        console.log(typeof code)
        axiosInstance.post(postCodeForgotPasswordUrl, {code:code} )
        .then((response)=>{
          console.log('Response: ', response)

          if(response.status === 200){
            setAuthData('', false, response.data.uuid)
            onChangeStep()
          }
          setShowLoadingSpinner(false)
        }).catch((err)=>{
          setShowLoadingSpinner(false)
          alert(err)
        })
      }      
    }


  return (
    <LogInContainer>
        <LoadingSpinner visible={showLoadingSpinner}/>

        <Zoom>
        <img className='logoTecImageTag' src={LogoTec}/>
        <h3>SIITEC</h3>

        <h2>Verificación de código</h2>

        <p className='messageToCodeVerfication'>Por favor ingrese el codigo de 4 digitos enviado al numero con terminacion 04</p>

        <div className='codeDigitsContainer'>
            <ReactInputVerificationCode onCompleted={(e)=> onChangeFourDigits(e)}/>
        </div>

        <p className='messageToCodeVerfication'>No recibiste el código?</p>
        <CounterButton buttonOnClick={()=>console.log('hola')} textButton='Reenviar código'/>
        

        {/* <PrimaryButton buttonOnClick={()=>console.log('')} textButton='Iniciar sesión'/> */}




        </Zoom>
    </LogInContainer>
  )
}
