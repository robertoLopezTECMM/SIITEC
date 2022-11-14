import React from 'react'
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import './index.css'

interface cardJuntaDeGobiernoProps{
    title: string;
    date: string;
}

export const CardJuntaDeGobierno = ({title, date}:cardJuntaDeGobiernoProps) => {
  return (
    <div className='cardJuntaGobierno'>
        <div className='titleDateContainer'>
            <p id="juntaDeGobiernoTitle">{title}</p>
            <p id="juntaDeGobiernoDate">{date}</p>
        </div>

        <div className='iconContainer'>
            <FolderSharedOutlinedIcon fontSize='large' style={{color:'#C59C3F'}}/>
        </div>
    </div>
  )
}
