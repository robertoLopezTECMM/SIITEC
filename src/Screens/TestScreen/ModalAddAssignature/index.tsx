import React, { useState } from 'react'
import Modal from 'react-modal';
import './index.css'


const assignatures = [
  {name: 'Calculo diferencial',         semester: '1'},
  {name: 'Matematicas discretas',       semester: '1'},
  {name: 'Quimica',                     semester: '1'},
  {name: 'Fundamentos de programación', semester: '1'},
  {name: 'POO',                         semester: '1'},
  {name: 'Taller de investigacion',     semester: '1'},
  {name: 'Formación cívica y ética',    semester: '1'},
];


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
}

export const ModalToAddAssignature = ({isOpen, onCloseModal,positionIndex}:modalProps) => {
    console.log('aqui toy:', positionIndex);
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
        <h1>Añadir asignatura</h1>
        <h2>Asignatura: </h2>
        <h2>Horario:</h2>
        <select name="assiganture" id="assignature">
          <option disabled>Seleccione una asignatura</option>
          {assignatures.map((item, index) => {
            return(
              <>
                <option value={index}>{item.name}</option>
              </>
            )
          })}
        </select>
        <hr />
        <button className='btn btn-primary' onClick={onCloseModal}>
            <h1>cerrar modal</h1>
        </button>
    </div>
  </Modal>
  
  )
}
