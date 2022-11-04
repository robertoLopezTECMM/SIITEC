import '../newCareer/index.css'

import React, { useState } from 'react'
import { ButtonPrimarys } from '../../../../../Components/Buttons/Buttons';
import { InputText } from '../../../../../Components/TextInputs/TextInputs';
import { FilteredList } from '../../components/FilteredList';
import { ModalCreateAssignature } from '../../components/ModalCreateAssignature';

export const Assignatures = () => {
  
    const[keyWord, setKeyWord] = useState('');
    const [openModal, setOpenModal] = useState(false)
    const [careersData, setCareersData] = useState([
      {
        code: 'ABC-123', 
        title: 'Matematicas Discretas'
      },
      {
        code: 'ABC-456', 
        title: 'Topicos avanzados de programacion'
      },
      {
        code: 'ABC-789', 
        title: 'Cisco 1'
      },
      {
        code: 'ABC-012', 
        title: 'Estructura de datos'
      },
      {
        code: 'ABC-012', 
        title: 'Sistemas operativos'
      },
      {
        code: 'ABC-012', 
        title: 'Quimica'
      },
      {
        code: 'ABC-012', 
        title: 'Simulacion'
      },
    ])
  

  
    const handleChange = (value:string) => {
      setKeyWord(value)
    }

    const closeModal = () =>{
      setOpenModal(false)
    }
    
    return(
      <>
        <ModalCreateAssignature isOpen={openModal} onCloseModal={closeModal} />
        <div className="searchAddCareerContainer">
          <div className="searchCareerInput">
            <InputText isForSearch placeholder='Buscar materia...' textInputOnChange={handleChange} labelText={''} />
          </div>
          <ButtonPrimarys isCancel={false} isborder={false} textButton={'Agregar materia'} buttonOnClick={()=>setOpenModal(true)} />
        </div>

        
        <div className='careersListContainer'>
          <FilteredList keyWord={keyWord} data={careersData} isForAssignatures={true}/>
        </div>
      </>
    );

}
