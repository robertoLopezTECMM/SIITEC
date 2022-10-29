import React, { useState } from 'react'
import Modal from 'react-modal';
import Selector from '../../components/Selector';
import './index.css'





const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width:'80%',
      height:'80%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border:'none'
    },
  };

interface modalProps{
    isOpen: boolean;
    onCloseModal: ()=>void;
    positionIndex: number;
    onSubmit: (value:string)=>void;
}

export const ModalToAddAssignature = ({isOpen, onCloseModal,positionIndex,onSubmit}:modalProps) => {
    const [modalIsOpen, setIsOpen] = useState(isOpen);
    const [valueSelector, setValueSelector] = useState("")

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      console.log('afteropenmodal')
    }
  
    function closeModal() {
      setIsOpen(false);
    }
   
  return (
    <Modal
    isOpen={isOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
    ariaHideApp={false}
  >
    <div className='modalMainContainer'>
        <h1>Añadir asignatura</h1>
        <h2>Asignatura: </h2>
        <h2>Horario:</h2>

        <Selector setValueSelector={setValueSelector}/>
        
        <hr />
        <button className='btn btn-danger' onClick={onCloseModal}>
            <h1>Cancelar</h1>
        </button>
        <button className='btn btn-primary' onClick={()=>onSubmit(valueSelector)}>
            <h1>Enviar</h1>
        </button>
    </div>
  </Modal>
  
  )
}
