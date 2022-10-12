import React from 'react'
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

export const ModalToAddAssignature = () => {
    let subtitle='kjdhfs';
    const [modalIsOpen, setIsOpen] = React.useState(true);

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
    <div><Modal
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <h2>Hello</h2>
    <button onClick={closeModal}>close</button>
    <div>I am a modal</div>
    <form>
      <input />
      <button>tab navigation</button>
      <button>stays</button>
      <button>inside</button>
      <button>the modal</button>
    </form>
  </Modal></div>
  )
}
