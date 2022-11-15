import React from 'react'
import './index.css'
import { ThemedH1 } from '../../../../../../Components/ThemedTexts'

interface headerBottomBorderProps{
    title: string
    subtitle?: string;
}

export const HeaderBottomBorder = ({title, subtitle}:headerBottomBorderProps) => {
  return (
    <div className='headerBottomBorderContainer'>
        <p>{title}</p>
        <p id='headerbottomBorderSubtitle'>{subtitle}</p>
    </div>
  )
}
