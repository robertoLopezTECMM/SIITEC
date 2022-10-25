import './index.css'
import { InputText, InputTextPassword } from '../../../src/Components/TextInputs/TextInputs'
import { authContext } from '../../Contexts/AuthProvider'
import { useContext, useState } from 'react'
import { ModalToAddAssignatureAdministradorAcademico } from '../Administrativos/administradorAcademico/components/ModalToAddAssignature'


export const TestScreen = () => {

  const [showModal, setShowModal] = useState(false)

  const onCloseModal = () =>{
    setShowModal(false)
  }



  const colorChange = (hexColor:any) => {
    console.log(hexColor)
  }

  return (
    <div className='container'>
      <h2>testScreen</h2>
      <button onClick={()=>setShowModal(true)}>abrir modal</button>
      <ModalToAddAssignatureAdministradorAcademico isOpen={showModal} onCloseModal={onCloseModal} />

    </div>
  )
}