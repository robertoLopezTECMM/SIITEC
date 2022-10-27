import { ClassNames } from '@emotion/react';
import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { text } from 'stream/consumers';
import {useState} from "react";

import './ChecksBox.css'
import { brotliDecompress } from 'zlib';
import { connect } from 'http2';
import { Console } from 'console';


interface checkboxInput{
  labelCheckBox: string;
  checked?: boolean;
  labelDirection?: string;
}

export const  RememberAccountCheckBox = ({labelCheckBox, checked, labelDirection}: checkboxInput ) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked]= useState (defaultChecked);
  const defaultLabelDirection = labelDirection? labelDirection : false;
  

  return (
    <div className='rememberAccountCheckBoxContainer'  >
        <input  
        className='rememberAccountCheckBox'
        type='checkbox' 
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
        />
        <label className='rememberAccountText' > {labelCheckBox } </label> 
        
    </div>
    
  );
};

export default RememberAccountCheckBox
