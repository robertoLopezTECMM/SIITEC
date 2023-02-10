import React, { useContext, useState } from 'react'
import { LogInContainer } from '../../../Components/Containers/LogInContainer/logInContainer'
import { Zoom } from "react-awesome-reveal";
import LogoTec from '../../../Assets/Images/newLogoTecJalisco.png'
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
    const { setAuthData, userAndPassword, setAuthRoll}:any = useContext(authContext);
    const navigate = useNavigate()
    //const {auth}:any = useContext(authContext);

    const onChangeFourDigits = (e:string) =>{
      if(e.includes('·')){
        return console.log('todavia tiene puntos en el numero')
      }else{

        axiosInstance.post(postLogInCredentialsUrl, {user:userAndPassword.user, password:userAndPassword.password, code:e} )
        .then((response)=>{
          console.log('Response: ', response)

          if(response.status === 200){
            setAuthData(response.data.token, true, undefined, response.data.rol)
            //setAuthRoll(response.data.rol)
            if(response.data.rol==1){
              navigate('/alumno');
            }
            else if(response.data.rol==2){
              navigate('/docente');
            }
            else if(response.data.rol==3){
              navigate('/jefecarrera')
            }
            else if(response.data.rol==4){
              navigate('/admin');
            }
            else if(response.data.rol==6){
              navigate('/planeacion');
            }
            else if(response.data.rol==7){
              navigate('/juntaGobiernoActual');
            }
            //navigate('/home')
          }
          setShowLoadingSpinner(false)
        }).catch((err)=>{
          setShowLoadingSpinner(false)
          alert(err)
        })
      }      
    }


  return (
    <div className='verificationCodeContainer'>
        <LoadingSpinner visible={showLoadingSpinner}/>

        <Zoom>
        <img className='logoTecImageTag' src={LogoTec}/>

        <br/>

        <h2>Verificación de código</h2>

        <p className='messageToCodeVerfication'>Ingrese el codigo de 4 digitos enviado a su correo electronico</p>

        <div className='codeDigitsContainer'>
            <ReactInputVerificationCode onCompleted={(e)=> onChangeFourDigits(e)}/>
        </div>

        <p className='messageToCodeVerfication'>¿No recibiste el código?</p>
        <CounterButton buttonOnClick={()=>console.log('hola')} textButton='Reenviar código'/>

        </Zoom>
    </div>
  )
}
