import React, { useContext, useState } from 'react'
import { authContext } from '../../Contexts/AuthProvider'
import { Home } from '../Home'
import { Schedule } from './Schedule'
import swal from 'sweetalert'
import { Slider, Sketch, Material, Colorful, Compact, Circle, Wheel, Block, Github, Chrome } from '@uiw/react-color';
import { Alpha, Hue, ShadeSlider, Saturation, hsvaToHslaString } from '@uiw/react-color';
import { EditableInput, EditableInputRGBA, EditableInputHSLA } from '@uiw/react-color';
import { ColorPicker } from '../../Components/ColorPicker'
import { ButtonPrimarys } from '../../Components/Buttons/Buttons'
import { InputText, InputTextShortNumber, InputTextPassword } from '../../Components/TextInputs/TextInputs';


export const TestScreen = () => {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const { userAndPassword, setUserPassword }:any = useContext(authContext);
  const [hex, setHex] = useState('#F44E3B');


  const textInputValue = () =>{
    console.log()
  }

  const onChangePasswords = (inputValue:string, fieldId:string) =>{

    if(fieldId === 'user') setUser(inputValue)
    if(fieldId === 'password') setPassword(inputValue)
  
  }

  const colorChange = (hexColor:any) => {
    console.log(hexColor)
  }

  return (
    // <ColorPicker  onChangeColorPicker={colorChange}/>
    <div style={{backgroundColor:'#707060'}}>

      <div style={{width:'50%',margin:'auto', display:'flex'}}>
      <InputText textInputOnChange={()=>console.log('hi')} labelText={'Nombre corto'} placeholder={'inserte nombre corto'} maxLenght={2} isForSearch/>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <InputText textInputOnChange={()=>console.log('hi')} labelText={'Nombre corto'} placeholder={'inserte nombre corto'} maxLenght={2} isForSearch/>

      </div>
      <InputText textInputOnChange={()=>console.log('hi')} labelText={'Nombre corto'} placeholder={'inserte nombre corto'} maxLenght={2} isForSearch/>
      <InputTextShortNumber  textInputOnChange={()=>console.log('hi')} labelText={'Creditos'}/>
      <InputTextPassword passwordOnchange={()=>console.log('hi')} labelText={'Nombre corto'} placeholder={'ingrese su contraseña'}/>
      <InputText textInputOnChange={()=>console.log('hi')} labelText={'Nombre corto'}/>
    </div>
    
  ) 
}