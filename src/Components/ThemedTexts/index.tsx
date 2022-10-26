import React from 'react'
import './index.css'

interface themedTextProps{
    text: string;
}

export const ThemedH1= ({text}:themedTextProps) => {
  return (
    <div className='themedH1'>{text}</div>
  )
}
