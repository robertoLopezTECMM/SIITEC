import React from 'react'
import Timer from '../Timer/timer';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
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
  textButton?: string;
  isCancel?: boolean;
  isborder?: boolean;
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

interface iconButtonAddProps {
  icon: any;
  buttonOnClick: () => void
}

export const RoundButtonAdd = ({ icon, buttonOnClick }:iconButtonAddProps) => {
  return (
    <button 
    onClick={()=>buttonOnClick()} 
    className="buttonPrimarySucces"
    style={{border:'solid 2px white'}} 
    >
        {icon}
    </button>
  )
}

export const DeleteButton = ({ textButton, buttonOnClick }: buttonProps) => {
  return (
    <button className="button-delete" onClick={buttonOnClick}>
      <i className="material-icons">delete</i>
    </button>
  );
};

export const DocumentButton = ({ textButton, buttonOnClick }: buttonProps) => {
  return (
    <button className="documentButton" onClick={buttonOnClick}>
      <DescriptionOutlinedIcon/> {"Documento"}
    </button>
  );
};




interface googlePrimaryButtonProps {
  buttonOnClick: () => void
}

export const GooglePrimaryButton = ({buttonOnClick }: googlePrimaryButtonProps) => {
  return (
    <button className='googlePrimaryButton' onClick={buttonOnClick}>
      <img src='https://developer.tecmm.mx/web-tsj-designs/googleIcon.png'/>
      <span>Inicia Sesión con Google</span>
    </button>
  );
};