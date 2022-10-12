import React from 'react'
import './index.css'
import { semester1, semester2, semester3, semester4, semester5, semester6, semester7, semester8, semester9 } from '../../Helpers/semesterData'
import { AssignatureComponent } from '../AssignatureComponent'
import { ModalToAddAssignature } from '../ModalToAddAssignature'



export const ReticulaComponent = () => {

  return (
    <div className='reticulaMainContainer'>
        <ModalToAddAssignature/>
        
        <div className='semestersContainer'>
            <div className='semesterColumnContainer'>
                {semester1.map((item)=> <AssignatureComponent item={item}/>)}
            </div>

            <div className='semesterColumnContainer'>
                {semester2.map((item)=> <AssignatureComponent item={item}/>)}
            </div>

            <div className='semesterColumnContainer'>
                {semester3.map((item)=> <AssignatureComponent item={item}/>)}
            </div>

            <div className='semesterColumnContainer'>
                {semester4.map((item)=> <AssignatureComponent item={item}/>)}
            </div>

            <div className='semesterColumnContainer'>
                {semester5.map((item)=> <AssignatureComponent item={item}/>)}
            </div>

            <div className='semesterColumnContainer'>
                {semester6.map((item)=> <AssignatureComponent item={item}/>)}
            </div>

            <div className='semesterColumnContainer'>
                {semester7.map((item)=> <AssignatureComponent item={item}/>)}
            </div>

            <div className='semesterColumnContainer'>
                {semester8.map((item)=> <AssignatureComponent item={item}/>)}
            </div>

            <div className='semesterColumnContainer'>
                {semester9.map((item)=> <AssignatureComponent item={item}/>)}
            </div>


        </div>



        <div className='totalsNumberContainer'>

        </div>
    </div>
  )
}
