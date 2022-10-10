import React, { useState } from 'react'
import './TextInputs.css'

interface textInputInterface{
  placeHolder:string;
  textInputOnChange: (value:string) => void;
}

export const TextInput= ({placeHolder, textInputOnChange}:textInputInterface) => {
  const [textInputValue, setTextinputValue] = useState('')
  return (
    <div className='inputWithButton'>
      <input  className='textInput' 
              placeholder={placeHolder}
              value={textInputValue}
              onChange={(e) => [setTextinputValue(e.target.value), textInputOnChange(e.currentTarget.value)]} />
    </div>
  )
}

interface textInputPasswordInterface{
    placeHolder:string;
    passwordOnchange: (value:string, value2:string) => void;
    passwordValue?: string;
    fieldId?:any;
    isForPassword?: boolean
}

export const PasswordTextInput= ({placeHolder, passwordOnchange, fieldId, isForPassword}:textInputPasswordInterface) => {
  const [hidePassword, setHidePassword] = useState(true)
  const [passWordValue, setPassWordValue] = useState('')
    return (
      <div className='inputWithButton'>
        <input

          type={!isForPassword
            ? '' 
            : hidePassword ? 'password' : ''
            }
          className='textInput'
          value={passWordValue}
          placeholder={placeHolder}
          onChange={(e) => [
                            setPassWordValue(e.target.value), 
                            passwordOnchange(e.currentTarget.value, fieldId)
                          ]
                    }
        />

        {isForPassword
          ? <button onClick={()=>setHidePassword(!hidePassword)}>
              <i className="material-icons">{hidePassword? 'visibility_off' : 'visibility'}</i>
            </button>
          
          : null
        } 

      </div>
    )
  }
  