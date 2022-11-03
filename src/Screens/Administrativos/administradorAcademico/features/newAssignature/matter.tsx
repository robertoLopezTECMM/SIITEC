import './matter.css'
import React, { useState } from 'react'
import { ButtonPrimarys } from '../../../../../Components/Buttons/Buttons';
import { InputText } from '../../../../../Components/TextInputs/TextInputs';
import {ListItem} from '../../components/ListItem/index'

export const ScreenMatter = () => {
  const[keyWord, setKeyWord] = useState('');
  const [matter, setMatter] = useState([
    { code:  'ID-1234',
      title: 'Matematicas discretas'},
    
    { code:  'ID-5678',
      title: 'Estructura de datos'},
    
    { code:  'ID-9012',
      title: 'Sistemas operativos'},
    
    { code:  'ID-1234',
      title: 'Filosofia y etica'},
    
    { code:  'ID-3456',
      title: 'Sistemas digitables'},
    
    { code:  'ID-7890',
      title: 'Cisco 5'},
    
    { code:  'ID-1234',
      title: 'Programacion web'},
    
    { code:  'ID-1234',
      title: 'Calculo integral'},
    
    { code:  'ID-1234',
      title: 'Calculo diferencial'},
    
    { code:  'ID-1234',
      title: 'Calculo vectorial'},

    { code:  'ID-1234',
      title: 'Fundamentos de programacion'},

    { code:  'ID-1234',
      title: 'Inteligencia artificial'},
  ])

  function List () {
    const filterData=matter.filter((item:any)=>{
      if (keyWord === ''){
        return item
      }else{
        return item.title.toLowerCase().includes(keyWord)
      }
    })

    return(
      <>
        {
          filterData.map((item:any)=>{
            return <ListItem code={item.code} title={item.title} /> 
          })}
      </>
    )
  }

  const handleChange = (value:string) => {
    setKeyWord(value)
  }

  return(
    <>
    <div className='containerprincipal'>
      <div className='containercomponents'>
        <div className='containercomponents search'>
          <InputText labelText='' placeholder='Buscar...' isForSearch textInputOnChange={handleChange} />
        </div>

          <ButtonPrimarys isCancel={false} textButton={'Agregar Materia'} isborder={false} buttonOnClick={function (): void {
            throw new Error('Function not implemented.')
          } }/>
      </div>

      <div className='containeritems'>
        <List/>
      </div>
    </div>
    </>
  );
}
