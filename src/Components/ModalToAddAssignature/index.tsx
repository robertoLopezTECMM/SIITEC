import React, { useState } from 'react'
import Modal from 'react-modal';
import { LogInContainer } from '../Containers/LogInContainer/logInContainer';
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
      backgroundColor:'transparent',
      border:'none'
    },
  };

interface modalProps{
    isOpen: boolean;
    onCloseModal: ()=>void;
}

export const ModalToAddAssignature = ({isOpen, onCloseModal}:modalProps) => {
    let subtitle='kjdhfs';
    const [modalIsOpen, setIsOpen] = useState(isOpen);

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
  >
    <div className='modalMainContainer'>
        <h1>hola</h1>
        <button onClick={onCloseModal}>
            <h1>cerrar modal</h1>
        </button>
    </div>
  </Modal>
  
  )
}
