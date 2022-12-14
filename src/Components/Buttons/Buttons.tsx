import React from 'react'
import Timer from '../Timer/timer';
import './Buttons.css'


interface buttonProps {
    textButton: string;
    buttonOnClick: () => void
}

export const PrimaryButton = ({textButton, buttonOnClick}:buttonProps) => {
  return (
    <button onClick={()=>buttonOnClick()} className='primaryButton'>
        <p>{textButton}</p>
    </button>
  )
}

export const CounterButton = ({textButton, buttonOnClick}:buttonProps) => {
  return (
    <button onClick={()=>buttonOnClick()} className='primaryButton'>
      <Timer initialMinute={2} initialSeconds={0} counterFinishedText={'Reenviar código'}/>
    </button>
  )
}

interface buttonprimarysProps {
  textButton: string;
  isCancel: boolean;
  isborder: boolean;
  buttonOnClick: () => void
}

export const ButtonPrimarys = ({isborder ,textButton, buttonOnClick, isCancel}:buttonprimarysProps) => {
  return (
    <button 
    onClick={()=>buttonOnClick()} 
    className={!isCancel?"buttonPrimarySucces":"buttonPrimaryCancel"} 
    style={isborder?{border:`${'solid 2px white'}`}:{border:`${'none'}`}} 
    >
        <p>{textButton}</p>
    </button>
  )
}
