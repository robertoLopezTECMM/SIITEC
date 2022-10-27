import { useState } from "react";
import Modal from 'react-modal';
import { LogInContainer } from "../../../../../../Components/Containers/LogInContainer/logInContainer";
import { TextInput } from "../../../../../../Components/TextInputs/TextInputs";
import { PrimaryButton } from "../../../../../../Components/Buttons/Buttons";

import './index.css'

interface ModalProps {
  isOpen: boolean
  onCloseModal: ()=>void
}

interface CareerProps {
  key: string;
  officialKey: string;
  shortName: string;
  fullName: string;
  grade: number;
  level: number;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width:'auto',
    height:'auto',
    transform: 'translate(-50%, -50%)',
    border:'none',
    overflow: 'none'
  },
};

export const Prueba = ({ isOpen, onCloseModal }: ModalProps) => {

  const [modalIsOpen, setIsOpen] = useState(isOpen);
  const [careerData, setCareerData] = useState<CareerProps>({
    key: '',
    officialKey: '',
    shortName: '',
    fullName: '',
    grade: 0,
    level: 0,
  });

  const [submitStatus, setSubmitStatus] = useState(false)

  function closeModal() {
    setIsOpen(false);
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
    const isNumber = /[0-9]+/.test(inputValue);
    if(isNumber) {
      const grade = Number(inputValue)
      setCareerData({
        ...careerData,
        'grade': grade,
      })
    } else {
      setCareerData({
        ...careerData,
        grade: 0,
      })
    }
  }

  const onChangeLevel = (inputValue:string) => {
    const isNumber = /[1-9]+/.test(inputValue);
    if(isNumber) {
      const level = Number(inputValue)
      setCareerData({
        ...careerData,
        'level': level,
      })
    } else {
      setCareerData({
        ...careerData,
        level: 0,
      })
    }
  }

  const sendData = () => {
    setSubmitStatus(true)
    const values = Object.values(careerData);
    const validate = values.map(value => (value) ? true : false);
    if(validate.includes(false)) {
      console.log("Todos los campos son requeridos")
    } else {
      console.log(careerData)
    }
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <LogInContainer className='modal_new-career'>
          <h2 className='title'>Nueva Carrera</h2>

            <div className='new-career_input'>
              <label>Clave</label>
              <TextInput textInputOnChange={onChangeClave} placeHolder='Escribe la clave'/>
              {(!careerData.key && submitStatus) && <p className="requerido">Este campo es requerido</p>}
            </div>
            <div className='new-career_input'>
              <label>Clave oficial</label>
              <TextInput textInputOnChange={onChangeClaveOficial} placeHolder='Escribe la clave'/>
              {(!careerData.officialKey && submitStatus) && <p className="requerido">Este campo es requerido</p>}
            </div>
            <div className='new-career_input'>
              <label>Nombre corto</label>
              <TextInput textInputOnChange={onChangeShortName} placeHolder='Escribe el nombre corto'/>
              {(!careerData.shortName && submitStatus) && <p className="requerido">Este campo es requerido</p>}
            </div>
            <div className='new-career_input'>
              <label>Nombre completo</label>
              <TextInput textInputOnChange={onChangeFullName} placeHolder='Escribe el nombre completo'/>
              {(!careerData.fullName && submitStatus) && <p className="requerido">Este campo es requerido</p>}
            </div>
            <div className='new-career_input numbers_input'>
              <div>
                <label>Grado</label>
                <TextInput textInputOnChange={onChangeGrade} placeHolder=''/>
                {(!careerData.grade && submitStatus) && <p className="requerido numerico">Este campo es debe ser numerico</p>}
              </div>
              <div>
                <label>Nivel</label>
                <TextInput textInputOnChange={onChangeLevel} placeHolder=''/>
                {(!careerData.level && submitStatus) && <p className="requerido numerico">Este campo es debe ser numerico</p>}
              </div>
            </div>


          <div className="buttons">
            <PrimaryButton buttonOnClick={onCloseModal} textButton='Cancelar' />
            <PrimaryButton buttonOnClick={sendData} textButton='Guardar' />
          </div>
        </LogInContainer>
      </Modal>
    </>
  )
}