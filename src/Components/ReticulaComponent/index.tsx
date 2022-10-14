import React, { useState } from 'react'
import './index.css'
import { semester1, semester2, semester3, semester4, semester5, semester6, semester7, semester8, semester9 } from '../../Helpers/semesterData'
import { AssignatureComponent } from '../AssignatureComponent'
import { ModalToAddAssignature } from '../ModalToAddAssignature'



export const ReticulaComponent = () => {

    const [openModal, setOpenModal] = useState(false)

    const onOpenModal = () => {
        setOpenModal(true)
    }

    const onCloseModal = () => {
        setOpenModal(false)
    }
  return (
    <div className='reticulaMainContainer'>
        <ModalToAddAssignature onCloseModal={onCloseModal} isOpen={openModal}/>
        
        <div className='semestersContainer'>
            <div className='semesterColumnContainer'>
                {semester1.map((item)=> <AssignatureComponent item={item} onOpenModal={onOpenModal}/>)}
            </div>

            <div className='semesterColumnContainer'>
                {semester2.map((item)=> <AssignatureComponent item={item} onOpenModal={onOpenModal}/>)}
            </div>

            <div className='semesterColumnContainer'>
                {semester3.map((item)=> <AssignatureComponent item={item} onOpenModal={onOpenModal}/>)}
            </div>

            <div className='semesterColumnContainer'>
                {semester4.map((item)=> <AssignatureComponent item={item} onOpenModal={onOpenModal}/>)}
            </div>

            <div className='semesterColumnContainer'>
                {semester5.map((item)=> <AssignatureComponent item={item} onOpenModal={onOpenModal}/>)}
            </div>

            <div className='semesterColumnContainer'>
                {semester6.map((item)=> <AssignatureComponent item={item} onOpenModal={onOpenModal}/>)}
            </div>

            <div className='semesterColumnContainer'>
                {semester7.map((item)=> <AssignatureComponent item={item} onOpenModal={onOpenModal}/>)}
            </div>

            <div className='semesterColumnContainer'>
                {semester8.map((item)=> <AssignatureComponent item={item} onOpenModal={onOpenModal}/>)}
            </div>

            <div className='semesterColumnContainer'>
                {semester9.map((item)=> <AssignatureComponent item={item} onOpenModal={onOpenModal}/>)}
            </div>


        </div>



        <div className='totalsNumberContainer'>

        </div>
    </div>
  )
}
