import { useState } from 'react';
import { LogInContainer } from '../../../../../../Components/Containers/LogInContainer/logInContainer';
import { TextInput } from '../../../../../../Components/TextInputs/TextInputs';
import { PrimaryButton } from '../../../../../../Components/Buttons/Buttons';

import './index.css'


export const TestScreen = () => {

  const [careerData, setCareerData] = useState({});
  const [showModal, setShowModal] = useState(true);

  const handleModal = () => {
    setShowModal(!showModal)
  }

  const onChangeClave = (inputValue:string) => {
    setCareerData({
      ...careerData,
      'key': inputValue,
    })
  }

  const onChangeClaveOficial = (inputValue:string) => {
    setCareerData({
      ...careerData,
      'officialKey': inputValue,
    })
  }

  const onChangeShortName = (inputValue:string) => {
    setCareerData({
      ...careerData,
      'shortName': inputValue,
    })
  }

  const onChangeFullName = (inputValue:string) => {
    setCareerData({
      ...careerData,
      'fullName': inputValue,
    })
  }

  const onChangeGrade = (inputValue:string) => {
    const grade = Number(inputValue)
    setCareerData({
      ...careerData,
      'grade': grade,
    })
  }

  const onChangeLevel = (inputValue:string) => {
    const level = Number(inputValue)
    setCareerData({
      ...careerData,
      'level': level,
    })
  }

  const sendData = () => {
    console.log(careerData)
  }

  return (
    (showModal ? <div className='modal_new-career'>
      <LogInContainer>
        <h2 className='title'>Nueva Carrera</h2>

          <div className='new-career_input'>
            <label>Clave</label>
            <TextInput textInputOnChange={onChangeClave} placeHolder='Escribe la clave'/>
          </div>
          <div className='new-career_input'>
            <label>Clave oficial</label>
            <TextInput textInputOnChange={onChangeClaveOficial} placeHolder='Escribe la clave'/>
          </div>
          <div className='new-career_input'>
            <label>Nombre corto</label>
            <TextInput textInputOnChange={onChangeShortName} placeHolder='Escribe el nombre corto'/>
          </div>
          <div className='new-career_input'>
            <label>Nombre completo</label>
            <TextInput textInputOnChange={onChangeFullName} placeHolder='Escribe el nombre completo'/>
          </div>
          <div className='new-career_input numbers_input'>
            <div>
              <label>Grado</label>
              <TextInput textInputOnChange={onChangeGrade} placeHolder=''/>
            </div>
            <div>
              <label>Nivel</label>
              <TextInput textInputOnChange={onChangeLevel} placeHolder=''/>
            </div>
          </div>


        <div className="buttons">
          <PrimaryButton buttonOnClick={handleModal} textButton='Cancelar' />
          <PrimaryButton buttonOnClick={sendData} textButton='Guardar' />
        </div>
      </LogInContainer>
    </div> : <PrimaryButton buttonOnClick={handleModal} textButton='Agregar carrera' />)
  )
}