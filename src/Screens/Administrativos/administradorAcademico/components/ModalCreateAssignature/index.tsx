
import React, { useState } from 'react'
import Modal from 'react-modal';
import { ButtonPrimarys } from '../../../../../Components/Buttons/Buttons';
import { ColorPicker } from '../../../../../Components/ColorPicker';
import { LogInContainer } from '../../../../../Components/Containers/LogInContainer/logInContainer';
import { InputText, InputTextShortNumber } from '../../../../../Components/TextInputs/TextInputs';
import { ThemedH1 } from '../../../../../Components/ThemedTexts';

import './index.css'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width:'100%',
      height:'100%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor:'transparent',
      border:'none',
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'center',
    },
  };

interface modalProps{
    isOpen: boolean;
    onCloseModal: ()=>void;
}

export const ModalCreateAssignature = ({isOpen, onCloseModal}:modalProps) => {
    const [modalIsOpen, setIsOpen] = useState(true);

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
      overlayClassName="Overlay"

    >
        <LogInContainer>
            <ThemedH1 text='Nueva Asignatura'/>


            <div style={{display:'flex'}}>

                <InputText
                    labelText='Nombre Corto'
                    textInputOnChange={()=>console.log('hi')}
                    placeholder='Escriba el nombe corto'
                />
                &nbsp;
                &nbsp;
                <InputText
                    labelText='Nombre Completo'
                    textInputOnChange={()=>console.log('hi')}
                    placeholder='Escriba el nombre completo'    
                />

            </div>

            <InputText
                labelText='Clave'
                textInputOnChange={()=>console.log('hi')}
                placeholder='Escriba el nombre completo'    
            />
            <div style={{display:'flex', width:'100%'}}>
                <InputTextShortNumber labelText='Unidades' textInputOnChange={()=>console.log('hi')}/>
                <InputTextShortNumber labelText='H/Teoricas' textInputOnChange={()=>console.log('hi')}/>
                <InputTextShortNumber labelText='H/Practicas' textInputOnChange={()=>console.log('hi')}/>

                <InputTextShortNumber labelText='Creditos' textInputOnChange={()=>console.log('hi')}/>

            </div>
            <div className='colorPickerContainerInModal'>
              <ColorPicker onChangeColorPicker={()=>console.log('hi')} />
            </div>

            






            
            <div className='buttonsModalContainer'>
                <ButtonPrimarys buttonOnClick={()=>onCloseModal()} textButton={'Cancelar'} isCancel isborder />
                <ButtonPrimarys buttonOnClick={()=>console.log('hi')} textButton={'Guardar'} isCancel={false} isborder />
            </div>





        </LogInContainer>
    </Modal>
  
  )
}
