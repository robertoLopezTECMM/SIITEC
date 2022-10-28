import './index.css'
import { InputText, InputTextPassword } from '../../../src/Components/TextInputs/TextInputs'
import { authContext } from '../../Contexts/AuthProvider'
import { useContext, useState } from 'react'
import { ListItem } from '../Administrativos/administradorAcademico/components/ListItem'
import { ModalNewCareer } from '../Administrativos/administradorAcademico/components/modalNewCareer'
import { ModalCreateAssignature } from '../Administrativos/administradorAcademico/components/ModalCreateAssignature'
import { Schedule } from './Scheduler/Schedule'

export const TestScreen = () => {
  const [showModal, setShowModal] = useState(false)

  const closeModal = () =>{
    setShowModal(false)
  }

  return(
    // <div>
    //   {/* <ModalNewCareer isOpen={showModal} onCloseModal={closeModal}/> */}
    //   <ModalCreateAssignature isOpen={showModal} onCloseModal={closeModal}/>

    //   <button onClick={()=>setShowModal(true)}>open modal</button>
    // </div>
    <Schedule/>
  );

}

{/* export const TestScreen = () => {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const { userAndPassword, setUserPassword }:any = useContext(authContext);

  const textInputValue = () =>{
    console.log()
  }



  return (
    <div className='container'>
      <h2>testScreen</h2>
      <InputText labelText='Nombre completo' placeholder='Escribe el nombre completo' textInputOnChange={textInputValue} />
      <InputText isForNumber labelText='Unidad' maxLenght={3} width='18%' textInputOnChange={textInputValue} />
      <InputText isForSearch labelText='Buscar' placeholder='Buscar carrera' textInputOnChange={textInputValue} /> 
      <InputTextPassword isForPassword labelText='Contraseña' passwordOnchange={onChangePasswords} fieldId='password' placeholder='Ingresa tu contraseña'/>
    {/* 
    <div className='container'>
      <h2>testScreen</h2>
      <TextInput labelText='Nombre completo' fieldId='' placeholder='Escribe el nombre completo' width='100%'/>
      <TextInput isUnidad labelText='Unidad' fieldId='' placeholder='' width='20%'/> 
      <TextInput isForPassword passwordOnchange={onChangePasswords} passwordValue='' fieldId='password' labelText='password' placeholder='Escribe la contraseña' width='100%'/>
      <TextInput isForPassword passwordOnchange={onChangePasswords} passwordValue='' fieldId='password' labelText='password' placeholder='Escribe la contraseña' width='100%'/>
    </div>
    

    </div>
  )
} */}