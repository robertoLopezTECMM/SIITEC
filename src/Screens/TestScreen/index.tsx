import React from 'react'
import '../../../src/Components/Buttons/Buttons.css'
import {ButtonPrimarys} from '../../../src/Components/Buttons/Buttons'

interface buttonprimarysProps {
  textButton: string;
  isCancel: boolean;
  isborder: boolean;
  buttonOnClick: () => void
}


export const TestScreen = () => {
  return (
    <div className='contenedortest'><span>testScreen</span>
      <ButtonPrimarys textButton={'TEXT'} isCancel={false} isborder={false} buttonOnClick={function (): void {} } />
      <ButtonPrimarys textButton={'TEXT'} isCancel={false} isborder={true}  buttonOnClick={function (): void {} } />
      <ButtonPrimarys textButton={'TEXT'} isCancel={true}  isborder={false} buttonOnClick={function (): void {} } />
      <ButtonPrimarys textButton={'TEXT'} isCancel={true}  isborder={true}  buttonOnClick={function (): void {} } />
    </div> 
  )
}
