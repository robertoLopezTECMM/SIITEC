import { useState } from "react";
import { LogInContainer } from "../../../../../../Components/Containers/LogInContainer/logInContainer";
import { TextInput } from "../../../../../../Components/TextInputs/TextInputs";
import { PrimaryButton } from "../../../../../../Components/Buttons/Buttons";

interface ModalProps {
  handleModal: () => void
}

interface CareerProps {
  key: string;
  officialKey: string;
  shortName: string;
  fullName: string;
  grade: number;
  level: number;
}

export const Prueba = ({ handleModal }: ModalProps) => {

  const [careerData, setCareerData] = useState<CareerProps>({
    key: '',
    officialKey: '',
    shortName: '',
    fullName: '',
    grade: 0,
    level: 0,
  });

  const onChangeClave = (key:string) => {
    setCareerData({
      ...careerData,
      key,
    })
  }

  const onChangeClaveOficial = (officialKey:string) => {
    setCareerData({
      ...careerData,
      officialKey,
    })
  }

  const onChangeShortName = (shortName:string) => {
    setCareerData({
      ...careerData,
      shortName,
    })
  }

  const onChangeFullName = (fullName:string) => {
    setCareerData({
      ...careerData,
      fullName,
    })
  }

  const onChangeGrade = (inputValue:string) => {
    const grade = Number(inputValue)
    setCareerData({
      ...careerData,
      grade,
    })
  }

  const onChangeLevel = (inputValue:string) => {
    const level = Number(inputValue)
    setCareerData({
      ...careerData,
      level,
    })
  }

  const sendData = () => {
    console.log(careerData)
    handleModal();
  }

  return (
    <>
      <div className='modal_new-career'>
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
      </div>
    </>
  )
}
