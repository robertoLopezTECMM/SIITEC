import React, { useState } from 'react'
import { Circle } from '@uiw/react-color';

interface colorPickerProps{
    onChangeColorPicker: (hexColor:string) => void 
}



export const ColorPicker = ({onChangeColorPicker}:colorPickerProps) => {
  const [hex, setHex] = useState('#F44E3B');

  return (
    <Circle
      colors={[ '#00A29A', '#006ca2', '#002ba2', '#4100a2', '#9d00a2', '#a2004c', '#a20000', '#a24400', '#a29200', '#64a200', '#1ea200', '#00a251']}
      color={hex}
      onChange={(color) => [
        onChangeColorPicker(color.hex), setHex(color.hex)
      ]}
    />

  )
}