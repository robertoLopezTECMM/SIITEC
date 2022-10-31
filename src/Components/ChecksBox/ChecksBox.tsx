import { ClassNames } from '@emotion/react';
import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { text } from 'stream/consumers';
import {useState} from "react";

import './ChecksBox.css'
import { brotliDecompress } from 'zlib';
import { connect } from 'http2';
import { Console } from 'console';
import { Prev } from 'react-bootstrap/esm/PageItem';
import { BlobOptions } from 'buffer';


interface checkboxInput{
  labelCheckBox: string;
  onChange: (value:boolean)=>void;
  
}

export const CheckBoxes = ({labelCheckBox, onChange}: checkboxInput ) => {
  const [isChecked, setIsChecked]= useState(false);


  return (
    <div className='checkBoxContainer'>
        <input  
        className='checkBoxCheckbox'
        type='checkbox' 
        checked={isChecked}
        name={labelCheckBox}
        onChange={() => [setIsChecked(!isChecked), onChange(!isChecked)]
        }
        />

        <label className='checkBoxText' > {labelCheckBox } </label> 
        
    </div>
    
  );
};



export default CheckBoxes
