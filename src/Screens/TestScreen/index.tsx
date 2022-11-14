import './index.css'
import { InputText, InputTextPassword } from '../../../src/Components/TextInputs/TextInputs'
import { authContext } from '../../Contexts/AuthProvider'
import { useContext, useState } from 'react'
import { ListItem } from '../Administrativos/administradorAcademico/components/ListItem'
import { ModalNewCareer } from '../Administrativos/administradorAcademico/components/modalNewCareer'
import { ModalCreateAssignature } from '../Administrativos/administradorAcademico/components/ModalCreateAssignature'
import { Carrers } from '../Administrativos/administradorAcademico/features/newCareer'
import { Assignatures } from '../Administrativos/administradorAcademico/features/newAssignature/index';
import { CardJuntaDeGobierno } from '../Administrativos/planeacion/juntaDeGobierno/components/cardJuntaDeGobierno/index';
import { Grid } from '@mui/material'
import { RoundButtonAdd } from '../../Components/Buttons/Buttons'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { DropFileInput } from '../../Components/DropFileInput/DropFileInput'
import CheckBox from '../../Components/ChecksBox/ChecksBox'
import { HeaderBottomBorder } from '../Administrativos/planeacion/juntaDeGobierno/components/headerBottomBorder'

export const TestScreen = () => {
  const [showModal, setShowModal] = useState(false)

  const closeModal = () =>{
    setShowModal(false)
  }

  return(
    <div style={{width:'80%', margin:'auto'}} >
    {/* <ModalNewCareer isOpen={showModal} onCloseModal={closeModal}/> */}
      {/* <ModalCreateAssignature isOpen={showModal} onCloseModal={closeModal}/>

      <button onClick={()=>setShowModal(true)}>open modal</button> */}

      <HeaderBottomBorder title='Primera sesion ordinaria' subtitle='15 de febrero de 2022'/>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardJuntaDeGobierno date='15 de febrero de 2022' title='Primera sesion ordinaria'/>
        </Grid>
        <Grid item xs={3}>
          <CardJuntaDeGobierno date='15 de febrero de 2022' title='Primera sesion ordinaria'/>
        </Grid>
        <Grid item xs={3}>
          <CardJuntaDeGobierno date='15 de febrero de 2022' title='Primera sesion ordinaria'/>
        </Grid>
        <Grid item xs={3}>
          <CardJuntaDeGobierno date='15 de febrero de 2022' title='Primera sesion ordinaria'/>
        </Grid>
        <Grid item xs={3}>
          <CardJuntaDeGobierno date='15 de febrero de 2022' title='Primera sesion ordinaria'/>
        </Grid>
      </Grid>

      <RoundButtonAdd icon={<AddCircleOutlineOutlinedIcon fontSize='large'/>} buttonOnClick={() => console.log('hi')}/>
    
      <DropFileInput borderColor='#00A29A' message={'seleccione el archivo'} onChangeInputFiles={()=>console.log('hi')}/>
    
      <CheckBox labelCheckBox='Tiene subtemas' onChange={()=>console.log('hi')}/>
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