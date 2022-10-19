import { useState } from 'react'
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
  
interface inputTextInterface{
  textInputOnChange: (value:string) => void;
  labelText: string;
  placeholder?: string;
  isForNumber?: boolean;
  isForSearch?: boolean;
  maxLenght?: number;
  width?: string;
}

export const InputText = ({labelText, placeholder, isForNumber, isForSearch, maxLenght, width, textInputOnChange}: inputTextInterface) => {
  const [textInputValue, setTextinputValue] = useState('')
    return(
        <div className='inputContainer'>
            <label>{labelText}</label>
            <input 
                className={!isForNumber ? "inputText" : "numberText"} 
                placeholder={!isForNumber ? placeholder : ''}
                maxLength={!isForNumber ? 524288 : maxLenght }
                style={!isForNumber ? {width: "100%"} : {width:`${width}`} } 
                value={textInputValue}
                onChange={(e) => [setTextinputValue(e.target.value), textInputOnChange(e.currentTarget.value)]} />
                {isForSearch
                ? <button>
                    <i className="material-icons">{'search'}</i>
                </button>
                : null
                }
        </div>
    )
}

interface inputTextPassword{
    passwordOnchange: (value:string, value2:string) => void;
    isForPassword?: boolean;
    labelText: string;
    placeholder: string;
    fieldId?: any;
}

export const InputTextPassword = ({labelText, placeholder, fieldId, isForPassword, passwordOnchange}: inputTextPassword) => {
    const [hidePassword, setHidePassword] = useState(true)
    const [passWordValue, setPassWordValue] = useState('')
    return(
        <div className='inputContainer'>
                <label>{labelText}</label>
                <input 
                    className={!isForPassword ? "inputText" : "inputTextPassword"} 
                    type={!isForPassword ? '' : hidePassword ? 'password' : ''} 
                    placeholder={placeholder}
                    style={{width: "100%"}}  
                    value={passWordValue}
                    onChange={(e) => [
                        setPassWordValue(e.target.value), 
                        passwordOnchange(e.currentTarget.value, fieldId)
                      ]
                }/>
                {isForPassword
                ? <button onClick={()=>setHidePassword(!hidePassword)}>
                    <i className="material-icons">{hidePassword ? 'visibility_off' : 'visibility'}</i>
                </button>
                : null
                }
        </div>
    )
}