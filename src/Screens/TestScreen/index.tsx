import './index.css'
import { InputText, InputTextPassword } from '../../../src/Components/TextInputs/TextInputs'
import { authContext } from '../../Contexts/AuthProvider'
import { useContext, useState } from 'react'

export const TestScreen = () => {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const { userAndPassword, setUserPassword }:any = useContext(authContext);

  

  const onChangePasswords = (inputValue:string, fieldId:string) =>{

    if(fieldId === 'user') setUser(inputValue)
    if(fieldId === 'password') setPassword(inputValue)
  
  }

  return (
    <div className='container'>
      <h2>testScreen</h2>
      <InputText labelText='Nombre completo' placeholder='Escribe el nombre completo' />
      <InputText isForNumber labelText='Unidad' maxLenght={3} width='18%' />
      <InputText isForSearch labelText='Buscar' placeholder='Buscar carrera' /> 
      <InputTextPassword isForPassword labelText='Contraseña'  passwordOnchange={onChangePasswords} fieldId='password' placeholder='Ingresa tu contraseña'/>
    {/* 
    <div className='container'>
      <h2>testScreen</h2>
      <TextInput labelText='Nombre completo' fieldId='' placeholder='Escribe el nombre completo' width='100%'/>
      <TextInput isUnidad labelText='Unidad' fieldId='' placeholder='' width='20%'/> 
      <TextInput isForPassword passwordOnchange={onChangePasswords} passwordValue='' fieldId='password' labelText='password' placeholder='Escribe la contraseña' width='100%'/>
      <TextInput isForPassword passwordOnchange={onChangePasswords} passwordValue='' fieldId='password' labelText='password' placeholder='Escribe la contraseña' width='100%'/>
    </div>
    */}

    </div>
  )
}