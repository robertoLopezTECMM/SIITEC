import './index.css'
import { InputText, InputTextPassword, InputTextSearch, TextInput } from '../../Components/TextInputs/TextInputs'
import { authContext } from '../../Contexts/AuthProvider'
import React, { useState } from 'react'
import { ListItem } from '../Administrativos/administradorAcademico/components/ListItem'
import { ButtonPrimarys } from '../../Components/Buttons/Buttons'
import { getValue } from '@testing-library/user-event/dist/utils'

export const TestScreen = () => {


  const[searchCarrers, setSearchCarrers] = useState('');

  const[keyWord, setKeyWord] = useState('');
  const [carrerasFiltradas, setCarrerasFiltradas] = useState<RegExpMatchArray | null>()
  const [carrers, setCarrers] = useState([
    {
      code: 'ABC-123', 
      title: 'Ingenieria en sistemas computacionales'
    },
    {
      code: 'ABC-456', 
      title: 'Ingenieria en electronica'
    },
    {
      code: 'ABC-789', 
      title: 'Ingenieria en industrial'
    },
    {
      code: 'ABC-012', 
      title: 'Licenciatura en gastronomia'
    },
    {
      code: 'ABC-012', 
      title: 'Ingenieria en mecatronica'
    },
    {
      code: 'ABC-012', 
      title: 'Ingenieria civil'
    },
    {
      code: 'ABC-012', 
      title: 'Licenciatura en electronica 2'
    },
  ])

  function List () {
    
    const filterData=carrers.filter((item:any)=>{


      if (keyWord === ''){
        return item
      }

      else{
        return item.title.toLowerCase().includes(keyWord)
      }

    })

    return(
      <>
        {
          filterData.map((item:any)=>{
            return <ListItem isCarrera code={item.code} title={item.title} /> 
          })
        
        }
      
      </>

    )
  }


  

  const handleChange = (value:string) => {
    //setSearchCarrers(value);
    //filterCarrers(value);
    setKeyWord(value)
    
  //console.log(filtersCarrers)

  }




  const searchCareer = () =>{

  }

  return(
    <>
      <div className="container-inputs">
        <div className="input-search">
          <InputTextSearch placeholder='Buscar carrera...' textInputOnChange={handleChange} />
        </div>
        <ButtonPrimarys isCancel={false} isborder={false} textButton={''} buttonOnClick={()=>console.log('hi')} />
      </div>
      <div className='container'>
        <List/>

      </div>
    </>
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