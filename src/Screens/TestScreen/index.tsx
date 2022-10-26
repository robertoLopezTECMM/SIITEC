import './index.css'
import { InputText, InputTextPassword } from '../../../src/Components/TextInputs/TextInputs'
import { authContext } from '../../Contexts/AuthProvider'
import { useContext, useState } from 'react'
import { ListItem } from '../Administrativos/administradorAcademico/components/ListItem'

export const TestScreen = () => {

  return(
    <div className='container'>
      <ListItem isCarrera code='SCI-093' title='Ingenieria en sistemas computacionales'/>
      <ListItem code='ID-1234' title='Matematicas discretas'/>
    </div>
  );

}

{/* export const TestScreen = () => {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const { userAndPassword, setUserPassword }:any = useContext(authContext);

  const textInputValue = () =>{
    console.log()
  }

  const onChangePasswords = (inputValue:string, fieldId:string) =>{

    if(fieldId === 'user') setUser(inputValue)
    if(fieldId === 'password') setPassword(inputValue)
  
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