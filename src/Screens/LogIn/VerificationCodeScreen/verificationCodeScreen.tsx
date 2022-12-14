import React, { useContext, useState } from 'react'
import { LogInContainer } from '../../../Components/Containers/LogInContainer/logInContainer'
import { Zoom } from "react-awesome-reveal";
import LogoTec from '../../../Assets/Images/logoTecJalisco.png'
import './verificationCodeScreen.css'
import ReactInputVerificationCode from 'react-input-verification-code';
import { CounterButton } from '../../../Components/Buttons/Buttons';
import { LoadingSpinner } from '../../../Components/LoadingSpinner';
import axiosInstance from '../../../Api/axiosInstance';
import { postLogInCredentialsUrl } from '../../../Api/apiRoutes';
import { authContext } from '../../../Contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';



export const VerificationCodeScreen = () => {
    const [showLoadingSpinner, setShowLoadingSpinner] = useState(false)
    const { setAuthData, userAndPassword}:any = useContext(authContext);
    const navigate = useNavigate()

    const onChangeFourDigits = (e:string) =>{
      if(e.includes('·')){
        return console.log('todavia tiene puntos en el numero')
      }else{

        axiosInstance.post(postLogInCredentialsUrl, {user:userAndPassword.user, password:userAndPassword.password, code:e} )
        .then((response)=>{
          console.log('Response: ', response)

          if(response.status === 200){
            setAuthData(response.data.token, true, undefined)
            navigate('/home')
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

        </Zoom>
    </LogInContainer>
  )
}
