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
    <div style={{backgroundColor:'black'}}>
      <ButtonPrimarys textButton={'Guardar'} isCancel={false} isborder={false} buttonOnClick={()=>console.log('hi')}/>
      <ButtonPrimarys textButton={'Cancelar'} isCancel={true} isborder={false} buttonOnClick={()=>console.log('hi')}/>
      <ButtonPrimarys textButton={'hola mundo'} isCancel={false} isborder={true} buttonOnClick={()=>console.log('hi')}/>
      <ButtonPrimarys textButton={'hola mundo'} isCancel={true} isborder={true} buttonOnClick={()=>console.log('hi')}/>
    </div>
    
  ) 
}