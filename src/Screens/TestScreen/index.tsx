import React from 'react'
import { Schedule } from './Schedule'

export const TestScreen = () => {

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
    <Schedule />
  )
}